import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { skillIndexByKey, skills, skillTypes } from "./constants";
import type { OrbitConfig, OrbitPoint } from "./props";

gsap.registerPlugin(useGSAP);

const AUTO_CHANGE_INTERVAL = 3000;
const OUTER_ORBIT_SECONDS = 96;
const INNER_ORBIT_SECONDS = 68;
const START_ANGLE = -90;

const positionOrbitPoints = ({
  angleRef,
  direction,
  orbit,
  points,
}: OrbitConfig) => {
  const radius = orbit.offsetWidth / 2;
  const totalPoints = points.length;

  points.forEach((point, index) => {
    const angle =
      START_ANGLE + angleRef.current + direction * (360 / totalPoints) * index;
    const radians = (angle * Math.PI) / 180;

    point.setX(Math.cos(radians) * radius);
    point.setY(Math.sin(radians) * radius);
  });
};

const isSkillPoint = (
  element: HTMLButtonElement | null,
): element is HTMLButtonElement => Boolean(element);

export default () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const innerOrbitRef = useRef<HTMLDivElement | null>(null);
  const outerOrbitRef = useRef<HTMLDivElement | null>(null);
  const innerSkillPointRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const outerSkillPointRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const innerAngleRef = useRef(0);
  const outerAngleRef = useRef(0);
  const isInteractionPausedRef = useRef(false);
  const isPausedRef = useRef(false);
  const isVisibleRef = useRef(false);
  const nextSkillTimeoutRef = useRef<number | null>(null);
  const activeSkill = skills[activeSkillIndex];
  const activeTypeIndex = skillTypes.indexOf(activeSkill.type);

  const clearNextSkillTimeout = useCallback(() => {
    if (nextSkillTimeoutRef.current !== null) {
      window.clearTimeout(nextSkillTimeoutRef.current);
      nextSkillTimeoutRef.current = null;
    }
  }, []);

  const scheduleNextSkill = useCallback(() => {
    clearNextSkillTimeout();

    nextSkillTimeoutRef.current = window.setTimeout(() => {
      if (!isInteractionPausedRef.current && isVisibleRef.current) {
        setActiveSkillIndex((currentIndex) => (currentIndex + 1) % skills.length);
      }
    }, AUTO_CHANGE_INTERVAL);
  }, [clearNextSkillTimeout]);

  const setOuterSkillPointRef = useCallback(
    (index: number) => (element: HTMLButtonElement | null) => {
      outerSkillPointRefs.current[index] = element;
    },
    [],
  );

  const setInnerSkillPointRef = useCallback(
    (index: number) => (element: HTMLButtonElement | null) => {
      innerSkillPointRefs.current[index] = element;
    },
    [],
  );

  const pauseOrbit = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const resumeOrbit = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  const activateSkill = useCallback(
    (skillKey: string) => {
      setActiveSkillIndex(skillIndexByKey[skillKey]);
      isInteractionPausedRef.current = true;
      clearNextSkillTimeout();
      pauseOrbit();
    },
    [clearNextSkillTimeout, pauseOrbit],
  );

  const deactivateSkill = useCallback(() => {
    isInteractionPausedRef.current = false;
    resumeOrbit();
    scheduleNextSkill();
  }, [resumeOrbit, scheduleNextSkill]);

  useEffect(() => {
    if (!isInteractionPausedRef.current && isVisibleRef.current) {
      scheduleNextSkill();
    }

    return clearNextSkillTimeout;
  }, [activeSkillIndex, clearNextSkillTimeout, scheduleNextSkill]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = Boolean(entry?.isIntersecting);

        if (isVisibleRef.current && !isInteractionPausedRef.current) {
          scheduleNextSkill();
        } else {
          clearNextSkillTimeout();
        }
      },
      { threshold: 0.01 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      clearNextSkillTimeout();
    };
  }, [clearNextSkillTimeout, scheduleNextSkill]);

  useGSAP(
    () => {
      const innerOrbit = innerOrbitRef.current;
      const outerOrbit = outerOrbitRef.current;

      if (!innerOrbit || !outerOrbit) {
        return;
      }

      const innerPoints = innerSkillPointRefs.current.filter(isSkillPoint);
      const outerPoints = outerSkillPointRefs.current.filter(isSkillPoint);
      const allPoints = [...outerPoints, ...innerPoints];
      const createOrbitPoints = (points: HTMLButtonElement[]): OrbitPoint[] =>
        points.map((point) => {
          const setX = gsap.quickSetter(point, "x", "px");
          const setY = gsap.quickSetter(point, "y", "px");

          return {
            setX: (value) => setX(value),
            setY: (value) => setY(value),
          };
        });

      const orbitConfigs: OrbitConfig[] = [
        {
          angleRef: outerAngleRef,
          direction: 1,
          orbit: outerOrbit,
          points: createOrbitPoints(outerPoints),
          seconds: OUTER_ORBIT_SECONDS,
        },
        {
          angleRef: innerAngleRef,
          direction: -1,
          orbit: innerOrbit,
          points: createOrbitPoints(innerPoints),
          seconds: INNER_ORBIT_SECONDS,
        },
      ];

      gsap.set(allPoints, {
        xPercent: -50,
        yPercent: -50,
      });

      const positionPoints = () => {
        orbitConfigs.forEach(positionOrbitPoints);
      };

      const tick = () => {
        if (!isPausedRef.current && isVisibleRef.current) {
          const deltaRatio = gsap.ticker.deltaRatio(60) / 60;

          orbitConfigs.forEach((orbitConfig) => {
            orbitConfig.angleRef.current +=
              (360 / orbitConfig.seconds) * deltaRatio;
          });

          positionPoints();
        }
      };

      positionPoints();
      gsap.ticker.add(tick);
      window.addEventListener("resize", positionPoints);

      return () => {
        gsap.ticker.remove(tick);
        window.removeEventListener("resize", positionPoints);
        gsap.set(allPoints, { clearProps: "all" });
      };
    },
    { scope: sectionRef },
  );

  return {
    activateSkill,
    activeSkill,
    activeTypeIndex,
    deactivateSkill,
    innerOrbitRef,
    outerOrbitRef,
    sectionRef,
    setInnerSkillPointRef,
    setOuterSkillPointRef,
  };
};

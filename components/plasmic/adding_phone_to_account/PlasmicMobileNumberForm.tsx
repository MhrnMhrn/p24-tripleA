// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7jvdQemeVhQeLCrYcMBTUF
// Component: wEusK5cnJH-F

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import TextInput from "../../TextInput"; // plasmic-import: 0joWdd7dF6TQ/component
import Select from "../../Select"; // plasmic-import: gUaVsqdTGH_a/component
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7jvdQemeVhQeLCrYcMBTUF/projectcss
import sty from "./PlasmicMobileNumberForm.module.css"; // plasmic-import: wEusK5cnJH-F/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: uEBumg9MpBtc/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 4YWE9pC0XBhy/icon
import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicMobileNumberForm__VariantMembers = {};
export type PlasmicMobileNumberForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicMobileNumberForm__VariantsArgs;
export const PlasmicMobileNumberForm__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMobileNumberForm__ArgsType = {
  nextStepTrigger?: (cell: string, countryCode: string) => void;
};
type ArgPropType = keyof PlasmicMobileNumberForm__ArgsType;
export const PlasmicMobileNumberForm__ArgProps = new Array<ArgPropType>(
  "nextStepTrigger"
);

export type PlasmicMobileNumberForm__OverridesType = {
  root?: Flex__<"div">;
  cellInput?: Flex__<typeof TextInput>;
  select?: Flex__<typeof Select>;
  button?: Flex__<typeof Button>;
};

export interface DefaultMobileNumberFormProps {
  nextStepTrigger?: (cell: string, countryCode: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMobileNumberForm__RenderFunc(props: {
  variants: PlasmicMobileNumberForm__VariantsArgs;
  args: PlasmicMobileNumberForm__ArgsType;
  overrides: PlasmicMobileNumberForm__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "cellInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "25"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__uo62D)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__apgaJ
          )}
        >
          {"\u0648\u0631\u0648\u062f/\u062b\u0628\u062a \u0646\u0627\u0645"}
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__nbXuc)}
      >
        <TextInput
          data-plasmic-name={"cellInput"}
          data-plasmic-override={overrides.cellInput}
          className={classNames("__wab_instance", sty.cellInput)}
          onChange={(...eventArgs) => {
            generateStateOnChangeProp($state, ["cellInput", "value"])(
              (e => e.target?.value).apply(null, eventArgs)
            );
          }}
          placeholder={"\u06f0\u06f9"}
          type={"tel"}
          value={generateStateValueProp($state, ["cellInput", "value"]) ?? ""}
        />

        <Select
          data-plasmic-name={"select"}
          data-plasmic-override={overrides.select}
          className={classNames("__wab_instance", sty.select)}
          onChange={(...eventArgs) => {
            generateStateOnChangeProp($state, ["select", "value"])(
              eventArgs[0]
            );
          }}
          options={(() => {
            const __composite = [
              { value: null, label: null },
              { value: null, label: null }
            ];
            __composite["0"]["value"] = "25";
            __composite["0"]["label"] = "+98";
            __composite["1"]["value"] = "+1";
            __composite["1"]["label"] = "+1";
            return __composite;
          })()}
          value={generateStateValueProp($state, ["select", "value"])}
        />
      </Stack__>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__qtUfv
        )}
      >
        {"\u0645\u062b\u0627\u0644:*******0912"}
      </div>
      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        children2={"\u062a\u0627\u06cc\u06cc\u062f"}
        className={classNames("__wab_instance", sty.button)}
        onClick={async event => {
          const $steps = {};

          $steps["runNextStepTrigger"] = true
            ? (() => {
                const actionArgs = {
                  eventRef: $props["nextStepTrigger"],
                  args: [
                    (() => {
                      try {
                        return $state.cellInput.value;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })(),
                    (() => {
                      try {
                        return $state.select.value;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()
                  ]
                };
                return (({ eventRef, args }) => {
                  return eventRef?.(...(args ?? []));
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["runNextStepTrigger"] != null &&
            typeof $steps["runNextStepTrigger"] === "object" &&
            typeof $steps["runNextStepTrigger"].then === "function"
          ) {
            $steps["runNextStepTrigger"] = await $steps["runNextStepTrigger"];
          }
        }}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cellInput", "select", "button"],
  cellInput: ["cellInput"],
  select: ["select"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  cellInput: typeof TextInput;
  select: typeof Select;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMobileNumberForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMobileNumberForm__VariantsArgs;
    args?: PlasmicMobileNumberForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMobileNumberForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMobileNumberForm__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMobileNumberForm__ArgProps,
          internalVariantPropNames: PlasmicMobileNumberForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMobileNumberForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMobileNumberForm";
  } else {
    func.displayName = `PlasmicMobileNumberForm.${nodeName}`;
  }
  return func;
}

export const PlasmicMobileNumberForm = Object.assign(
  // Top-level PlasmicMobileNumberForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cellInput: makeNodeComponent("cellInput"),
    select: makeNodeComponent("select"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicMobileNumberForm
    internalVariantProps: PlasmicMobileNumberForm__VariantProps,
    internalArgProps: PlasmicMobileNumberForm__ArgProps
  }
);

export default PlasmicMobileNumberForm;
/* prettier-ignore-end */

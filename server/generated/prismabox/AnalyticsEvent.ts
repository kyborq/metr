import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const AnalyticsEventPlain = t.Object(
  {
    id: t.Integer(),
    event: t.String(),
    props: __nullable__(t.Any()),
    createdAt: t.Date(),
  },
  { additionalProperties: false },
);

export const AnalyticsEventRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const AnalyticsEventPlainInputCreate = t.Object(
  { event: t.String(), props: t.Optional(__nullable__(t.Any())) },
  { additionalProperties: false },
);

export const AnalyticsEventPlainInputUpdate = t.Object(
  { event: t.Optional(t.String()), props: t.Optional(__nullable__(t.Any())) },
  { additionalProperties: false },
);

export const AnalyticsEventRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const AnalyticsEventRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const AnalyticsEventWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.Integer(),
          event: t.String(),
          props: t.Any(),
          createdAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "AnalyticsEvent" },
  ),
);

export const AnalyticsEventWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.Integer() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.Integer() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.Integer(),
              event: t.String(),
              props: t.Any(),
              createdAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "AnalyticsEvent" },
);

export const AnalyticsEventSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      event: t.Boolean(),
      props: t.Boolean(),
      createdAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const AnalyticsEventInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const AnalyticsEventOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      event: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      props: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const AnalyticsEvent = t.Composite(
  [AnalyticsEventPlain, AnalyticsEventRelations],
  { additionalProperties: false },
);

export const AnalyticsEventInputCreate = t.Composite(
  [AnalyticsEventPlainInputCreate, AnalyticsEventRelationsInputCreate],
  { additionalProperties: false },
);

export const AnalyticsEventInputUpdate = t.Composite(
  [AnalyticsEventPlainInputUpdate, AnalyticsEventRelationsInputUpdate],
  { additionalProperties: false },
);

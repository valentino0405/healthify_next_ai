import { pgTable, serial ,text,varchar} from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    cause:varchar('cause').notNull(),
    Desc:varchar('Desc').notNull(),
    Days:varchar('Days').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})

export const UserAnswer=pgTable('userAnswer', {
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    recovery_period:varchar('recovery_period'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),
  })
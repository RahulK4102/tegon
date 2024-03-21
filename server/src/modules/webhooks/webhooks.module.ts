/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from 'nestjs-prisma';

import GithubService from 'modules/integrations/github/github.service';
import IssuesHistoryService from 'modules/issue-history/issue-history.service';
import IssuesService from 'modules/issues/issues.service';

import { WebhookController } from './webhooks.controller';
import WebhookService from './webhooks.service';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [WebhookController],
  providers: [
    PrismaService,
    WebhookService,
    IssuesService,
    IssuesHistoryService,
    GithubService,
  ],
  exports: [],
})
export class WebhooksModule {}
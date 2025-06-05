package com.group23.houses_discovery.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing
public class AuditingConfig {
    // That's all here for now. We'll add more auditing configurations later.
}
# `botManagement` Submodule <a name="`botManagement` Submodule" id="@cdktn/provider-cloudflare.botManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotManagement <a name="BotManagement" id="@cdktn/provider-cloudflare.botManagement.BotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.bot_management.BotManagement;

BotManagement.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .aiBotsProtection(java.lang.String)
//  .autoUpdateModel(java.lang.Boolean|IResolvable)
//  .bmCookieEnabled(java.lang.Boolean|IResolvable)
//  .cfRobotsVariant(java.lang.String)
//  .contentBotsProtection(java.lang.String)
//  .crawlerProtection(java.lang.String)
//  .enableJs(java.lang.Boolean|IResolvable)
//  .fightMode(java.lang.Boolean|IResolvable)
//  .isRobotsTxtManaged(java.lang.Boolean|IResolvable)
//  .optimizeWordpress(java.lang.Boolean|IResolvable)
//  .sbfmDefinitelyAutomated(java.lang.String)
//  .sbfmLikelyAutomated(java.lang.String)
//  .sbfmStaticResourceProtection(java.lang.Boolean|IResolvable)
//  .sbfmVerifiedBots(java.lang.String)
//  .suppressSessionScore(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.aiBotsProtection">aiBotsProtection</a></code> | <code>java.lang.String</code> | Enable rule to block AI Scrapers and Crawlers. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.autoUpdateModel">autoUpdateModel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.bmCookieEnabled">bmCookieEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.cfRobotsVariant">cfRobotsVariant</a></code> | <code>java.lang.String</code> | Specifies the Robots Access Control License variant to use. Available values: "off", "policy_only". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.contentBotsProtection">contentBotsProtection</a></code> | <code>java.lang.String</code> | Enable rule to block content bots. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.crawlerProtection">crawlerProtection</a></code> | <code>java.lang.String</code> | Enable rule to punish AI Scrapers and Crawlers via a link maze. Available values: "enabled", "disabled". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.enableJs">enableJs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.fightMode">fightMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.isRobotsTxtManaged">isRobotsTxtManaged</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.optimizeWordpress">optimizeWordpress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. Available values: "allow", "block", "managed_challenge". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. Available values: "allow", "block", "managed_challenge". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. Available values: "allow", "block". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.suppressSessionScore">suppressSessionScore</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `aiBotsProtection`<sup>Optional</sup> <a name="aiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.aiBotsProtection"></a>

- *Type:* java.lang.String

Enable rule to block AI Scrapers and Crawlers.

Please note the value `only_on_ad_pages` is currently not available for Enterprise customers.
Available values: "block", "disabled", "only_on_ad_pages".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#ai_bots_protection BotManagement#ai_bots_protection}

---

##### `autoUpdateModel`<sup>Optional</sup> <a name="autoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.autoUpdateModel"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `bmCookieEnabled`<sup>Optional</sup> <a name="bmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.bmCookieEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#bm_cookie_enabled BotManagement#bm_cookie_enabled}

---

##### `cfRobotsVariant`<sup>Optional</sup> <a name="cfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.cfRobotsVariant"></a>

- *Type:* java.lang.String

Specifies the Robots Access Control License variant to use. Available values: "off", "policy_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#cf_robots_variant BotManagement#cf_robots_variant}

---

##### `contentBotsProtection`<sup>Optional</sup> <a name="contentBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.contentBotsProtection"></a>

- *Type:* java.lang.String

Enable rule to block content bots.

When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules.
Available values: "block", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#content_bots_protection BotManagement#content_bots_protection}

---

##### `crawlerProtection`<sup>Optional</sup> <a name="crawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.crawlerProtection"></a>

- *Type:* java.lang.String

Enable rule to punish AI Scrapers and Crawlers via a link maze. Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#crawler_protection BotManagement#crawler_protection}

---

##### `enableJs`<sup>Optional</sup> <a name="enableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.enableJs"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `fightMode`<sup>Optional</sup> <a name="fightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.fightMode"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `isRobotsTxtManaged`<sup>Optional</sup> <a name="isRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.isRobotsTxtManaged"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#is_robots_txt_managed BotManagement#is_robots_txt_managed}

---

##### `optimizeWordpress`<sup>Optional</sup> <a name="optimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.optimizeWordpress"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `sbfmDefinitelyAutomated`<sup>Optional</sup> <a name="sbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmDefinitelyAutomated"></a>

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on definitely automated requests. Available values: "allow", "block", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `sbfmLikelyAutomated`<sup>Optional</sup> <a name="sbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmLikelyAutomated"></a>

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on likely automated requests. Available values: "allow", "block", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `sbfmStaticResourceProtection`<sup>Optional</sup> <a name="sbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmStaticResourceProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection.
Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `sbfmVerifiedBots`<sup>Optional</sup> <a name="sbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmVerifiedBots"></a>

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on verified bots requests. Available values: "allow", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `suppressSessionScore`<sup>Optional</sup> <a name="suppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.suppressSessionScore"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetAiBotsProtection">resetAiBotsProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel">resetAutoUpdateModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetBmCookieEnabled">resetBmCookieEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetCfRobotsVariant">resetCfRobotsVariant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetContentBotsProtection">resetContentBotsProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetCrawlerProtection">resetCrawlerProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetEnableJs">resetEnableJs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetFightMode">resetFightMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetIsRobotsTxtManaged">resetIsRobotsTxtManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress">resetOptimizeWordpress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated">resetSbfmDefinitelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated">resetSbfmLikelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection">resetSbfmStaticResourceProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots">resetSbfmVerifiedBots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore">resetSuppressSessionScore</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.botManagement.BotManagement.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.botManagement.BotManagement.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.botManagement.BotManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAiBotsProtection` <a name="resetAiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetAiBotsProtection"></a>

```java
public void resetAiBotsProtection()
```

##### `resetAutoUpdateModel` <a name="resetAutoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel"></a>

```java
public void resetAutoUpdateModel()
```

##### `resetBmCookieEnabled` <a name="resetBmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetBmCookieEnabled"></a>

```java
public void resetBmCookieEnabled()
```

##### `resetCfRobotsVariant` <a name="resetCfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetCfRobotsVariant"></a>

```java
public void resetCfRobotsVariant()
```

##### `resetContentBotsProtection` <a name="resetContentBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetContentBotsProtection"></a>

```java
public void resetContentBotsProtection()
```

##### `resetCrawlerProtection` <a name="resetCrawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetCrawlerProtection"></a>

```java
public void resetCrawlerProtection()
```

##### `resetEnableJs` <a name="resetEnableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetEnableJs"></a>

```java
public void resetEnableJs()
```

##### `resetFightMode` <a name="resetFightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetFightMode"></a>

```java
public void resetFightMode()
```

##### `resetIsRobotsTxtManaged` <a name="resetIsRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetIsRobotsTxtManaged"></a>

```java
public void resetIsRobotsTxtManaged()
```

##### `resetOptimizeWordpress` <a name="resetOptimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress"></a>

```java
public void resetOptimizeWordpress()
```

##### `resetSbfmDefinitelyAutomated` <a name="resetSbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated"></a>

```java
public void resetSbfmDefinitelyAutomated()
```

##### `resetSbfmLikelyAutomated` <a name="resetSbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated"></a>

```java
public void resetSbfmLikelyAutomated()
```

##### `resetSbfmStaticResourceProtection` <a name="resetSbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection"></a>

```java
public void resetSbfmStaticResourceProtection()
```

##### `resetSbfmVerifiedBots` <a name="resetSbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots"></a>

```java
public void resetSbfmVerifiedBots()
```

##### `resetSuppressSessionScore` <a name="resetSuppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore"></a>

```java
public void resetSuppressSessionScore()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BotManagement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.bot_management.BotManagement;

BotManagement.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.bot_management.BotManagement;

BotManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.bot_management.BotManagement;

BotManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.bot_management.BotManagement;

BotManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BotManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BotManagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BotManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BotManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BotManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.staleZoneConfiguration">staleZoneConfiguration</a></code> | <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference">BotManagementStaleZoneConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel">usingLatestModel</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtectionInput">aiBotsProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput">autoUpdateModelInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabledInput">bmCookieEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariantInput">cfRobotsVariantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.contentBotsProtectionInput">contentBotsProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtectionInput">crawlerProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJsInput">enableJsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightModeInput">fightModeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManagedInput">isRobotsTxtManagedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput">optimizeWordpressInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput">sbfmDefinitelyAutomatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput">sbfmLikelyAutomatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput">sbfmStaticResourceProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput">sbfmVerifiedBotsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput">suppressSessionScoreInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtection">aiBotsProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel">autoUpdateModel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabled">bmCookieEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariant">cfRobotsVariant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.contentBotsProtection">contentBotsProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtection">crawlerProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJs">enableJs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightMode">fightMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManaged">isRobotsTxtManaged</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress">optimizeWordpress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore">suppressSessionScore</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `staleZoneConfiguration`<sup>Required</sup> <a name="staleZoneConfiguration" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.staleZoneConfiguration"></a>

```java
public BotManagementStaleZoneConfigurationOutputReference getStaleZoneConfiguration();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference">BotManagementStaleZoneConfigurationOutputReference</a>

---

##### `usingLatestModel`<sup>Required</sup> <a name="usingLatestModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel"></a>

```java
public IResolvable getUsingLatestModel();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `aiBotsProtectionInput`<sup>Optional</sup> <a name="aiBotsProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtectionInput"></a>

```java
public java.lang.String getAiBotsProtectionInput();
```

- *Type:* java.lang.String

---

##### `autoUpdateModelInput`<sup>Optional</sup> <a name="autoUpdateModelInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpdateModelInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bmCookieEnabledInput`<sup>Optional</sup> <a name="bmCookieEnabledInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getBmCookieEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cfRobotsVariantInput`<sup>Optional</sup> <a name="cfRobotsVariantInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariantInput"></a>

```java
public java.lang.String getCfRobotsVariantInput();
```

- *Type:* java.lang.String

---

##### `contentBotsProtectionInput`<sup>Optional</sup> <a name="contentBotsProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.contentBotsProtectionInput"></a>

```java
public java.lang.String getContentBotsProtectionInput();
```

- *Type:* java.lang.String

---

##### `crawlerProtectionInput`<sup>Optional</sup> <a name="crawlerProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtectionInput"></a>

```java
public java.lang.String getCrawlerProtectionInput();
```

- *Type:* java.lang.String

---

##### `enableJsInput`<sup>Optional</sup> <a name="enableJsInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableJsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fightModeInput`<sup>Optional</sup> <a name="fightModeInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightModeInput"></a>

```java
public java.lang.Boolean|IResolvable getFightModeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isRobotsTxtManagedInput`<sup>Optional</sup> <a name="isRobotsTxtManagedInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManagedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsRobotsTxtManagedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optimizeWordpressInput`<sup>Optional</sup> <a name="optimizeWordpressInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput"></a>

```java
public java.lang.Boolean|IResolvable getOptimizeWordpressInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sbfmDefinitelyAutomatedInput`<sup>Optional</sup> <a name="sbfmDefinitelyAutomatedInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput"></a>

```java
public java.lang.String getSbfmDefinitelyAutomatedInput();
```

- *Type:* java.lang.String

---

##### `sbfmLikelyAutomatedInput`<sup>Optional</sup> <a name="sbfmLikelyAutomatedInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput"></a>

```java
public java.lang.String getSbfmLikelyAutomatedInput();
```

- *Type:* java.lang.String

---

##### `sbfmStaticResourceProtectionInput`<sup>Optional</sup> <a name="sbfmStaticResourceProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getSbfmStaticResourceProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sbfmVerifiedBotsInput`<sup>Optional</sup> <a name="sbfmVerifiedBotsInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput"></a>

```java
public java.lang.String getSbfmVerifiedBotsInput();
```

- *Type:* java.lang.String

---

##### `suppressSessionScoreInput`<sup>Optional</sup> <a name="suppressSessionScoreInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput"></a>

```java
public java.lang.Boolean|IResolvable getSuppressSessionScoreInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `aiBotsProtection`<sup>Required</sup> <a name="aiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtection"></a>

```java
public java.lang.String getAiBotsProtection();
```

- *Type:* java.lang.String

---

##### `autoUpdateModel`<sup>Required</sup> <a name="autoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpdateModel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bmCookieEnabled`<sup>Required</sup> <a name="bmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabled"></a>

```java
public java.lang.Boolean|IResolvable getBmCookieEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cfRobotsVariant`<sup>Required</sup> <a name="cfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariant"></a>

```java
public java.lang.String getCfRobotsVariant();
```

- *Type:* java.lang.String

---

##### `contentBotsProtection`<sup>Required</sup> <a name="contentBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.contentBotsProtection"></a>

```java
public java.lang.String getContentBotsProtection();
```

- *Type:* java.lang.String

---

##### `crawlerProtection`<sup>Required</sup> <a name="crawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtection"></a>

```java
public java.lang.String getCrawlerProtection();
```

- *Type:* java.lang.String

---

##### `enableJs`<sup>Required</sup> <a name="enableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJs"></a>

```java
public java.lang.Boolean|IResolvable getEnableJs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fightMode`<sup>Required</sup> <a name="fightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightMode"></a>

```java
public java.lang.Boolean|IResolvable getFightMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isRobotsTxtManaged`<sup>Required</sup> <a name="isRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManaged"></a>

```java
public java.lang.Boolean|IResolvable getIsRobotsTxtManaged();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optimizeWordpress`<sup>Required</sup> <a name="optimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress"></a>

```java
public java.lang.Boolean|IResolvable getOptimizeWordpress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sbfmDefinitelyAutomated`<sup>Required</sup> <a name="sbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated"></a>

```java
public java.lang.String getSbfmDefinitelyAutomated();
```

- *Type:* java.lang.String

---

##### `sbfmLikelyAutomated`<sup>Required</sup> <a name="sbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated"></a>

```java
public java.lang.String getSbfmLikelyAutomated();
```

- *Type:* java.lang.String

---

##### `sbfmStaticResourceProtection`<sup>Required</sup> <a name="sbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection"></a>

```java
public java.lang.Boolean|IResolvable getSbfmStaticResourceProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sbfmVerifiedBots`<sup>Required</sup> <a name="sbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots"></a>

```java
public java.lang.String getSbfmVerifiedBots();
```

- *Type:* java.lang.String

---

##### `suppressSessionScore`<sup>Required</sup> <a name="suppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore"></a>

```java
public java.lang.Boolean|IResolvable getSuppressSessionScore();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BotManagementConfig <a name="BotManagementConfig" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.bot_management.BotManagementConfig;

BotManagementConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .aiBotsProtection(java.lang.String)
//  .autoUpdateModel(java.lang.Boolean|IResolvable)
//  .bmCookieEnabled(java.lang.Boolean|IResolvable)
//  .cfRobotsVariant(java.lang.String)
//  .contentBotsProtection(java.lang.String)
//  .crawlerProtection(java.lang.String)
//  .enableJs(java.lang.Boolean|IResolvable)
//  .fightMode(java.lang.Boolean|IResolvable)
//  .isRobotsTxtManaged(java.lang.Boolean|IResolvable)
//  .optimizeWordpress(java.lang.Boolean|IResolvable)
//  .sbfmDefinitelyAutomated(java.lang.String)
//  .sbfmLikelyAutomated(java.lang.String)
//  .sbfmStaticResourceProtection(java.lang.Boolean|IResolvable)
//  .sbfmVerifiedBots(java.lang.String)
//  .suppressSessionScore(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.aiBotsProtection">aiBotsProtection</a></code> | <code>java.lang.String</code> | Enable rule to block AI Scrapers and Crawlers. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel">autoUpdateModel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.bmCookieEnabled">bmCookieEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.cfRobotsVariant">cfRobotsVariant</a></code> | <code>java.lang.String</code> | Specifies the Robots Access Control License variant to use. Available values: "off", "policy_only". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.contentBotsProtection">contentBotsProtection</a></code> | <code>java.lang.String</code> | Enable rule to block content bots. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.crawlerProtection">crawlerProtection</a></code> | <code>java.lang.String</code> | Enable rule to punish AI Scrapers and Crawlers via a link maze. Available values: "enabled", "disabled". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs">enableJs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode">fightMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.isRobotsTxtManaged">isRobotsTxtManaged</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress">optimizeWordpress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. Available values: "allow", "block", "managed_challenge". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. Available values: "allow", "block", "managed_challenge". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. Available values: "allow", "block". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore">suppressSessionScore</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `aiBotsProtection`<sup>Optional</sup> <a name="aiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.aiBotsProtection"></a>

```java
public java.lang.String getAiBotsProtection();
```

- *Type:* java.lang.String

Enable rule to block AI Scrapers and Crawlers.

Please note the value `only_on_ad_pages` is currently not available for Enterprise customers.
Available values: "block", "disabled", "only_on_ad_pages".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#ai_bots_protection BotManagement#ai_bots_protection}

---

##### `autoUpdateModel`<sup>Optional</sup> <a name="autoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpdateModel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `bmCookieEnabled`<sup>Optional</sup> <a name="bmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.bmCookieEnabled"></a>

```java
public java.lang.Boolean|IResolvable getBmCookieEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#bm_cookie_enabled BotManagement#bm_cookie_enabled}

---

##### `cfRobotsVariant`<sup>Optional</sup> <a name="cfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.cfRobotsVariant"></a>

```java
public java.lang.String getCfRobotsVariant();
```

- *Type:* java.lang.String

Specifies the Robots Access Control License variant to use. Available values: "off", "policy_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#cf_robots_variant BotManagement#cf_robots_variant}

---

##### `contentBotsProtection`<sup>Optional</sup> <a name="contentBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.contentBotsProtection"></a>

```java
public java.lang.String getContentBotsProtection();
```

- *Type:* java.lang.String

Enable rule to block content bots.

When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules.
Available values: "block", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#content_bots_protection BotManagement#content_bots_protection}

---

##### `crawlerProtection`<sup>Optional</sup> <a name="crawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.crawlerProtection"></a>

```java
public java.lang.String getCrawlerProtection();
```

- *Type:* java.lang.String

Enable rule to punish AI Scrapers and Crawlers via a link maze. Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#crawler_protection BotManagement#crawler_protection}

---

##### `enableJs`<sup>Optional</sup> <a name="enableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs"></a>

```java
public java.lang.Boolean|IResolvable getEnableJs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `fightMode`<sup>Optional</sup> <a name="fightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode"></a>

```java
public java.lang.Boolean|IResolvable getFightMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `isRobotsTxtManaged`<sup>Optional</sup> <a name="isRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.isRobotsTxtManaged"></a>

```java
public java.lang.Boolean|IResolvable getIsRobotsTxtManaged();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#is_robots_txt_managed BotManagement#is_robots_txt_managed}

---

##### `optimizeWordpress`<sup>Optional</sup> <a name="optimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress"></a>

```java
public java.lang.Boolean|IResolvable getOptimizeWordpress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `sbfmDefinitelyAutomated`<sup>Optional</sup> <a name="sbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated"></a>

```java
public java.lang.String getSbfmDefinitelyAutomated();
```

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on definitely automated requests. Available values: "allow", "block", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `sbfmLikelyAutomated`<sup>Optional</sup> <a name="sbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated"></a>

```java
public java.lang.String getSbfmLikelyAutomated();
```

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on likely automated requests. Available values: "allow", "block", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `sbfmStaticResourceProtection`<sup>Optional</sup> <a name="sbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection"></a>

```java
public java.lang.Boolean|IResolvable getSbfmStaticResourceProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection.
Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `sbfmVerifiedBots`<sup>Optional</sup> <a name="sbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots"></a>

```java
public java.lang.String getSbfmVerifiedBots();
```

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on verified bots requests. Available values: "allow", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `suppressSessionScore`<sup>Optional</sup> <a name="suppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore"></a>

```java
public java.lang.Boolean|IResolvable getSuppressSessionScore();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---

### BotManagementStaleZoneConfiguration <a name="BotManagementStaleZoneConfiguration" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.bot_management.BotManagementStaleZoneConfiguration;

BotManagementStaleZoneConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### BotManagementStaleZoneConfigurationOutputReference <a name="BotManagementStaleZoneConfigurationOutputReference" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.bot_management.BotManagementStaleZoneConfigurationOutputReference;

new BotManagementStaleZoneConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fightMode">fightMode</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress">optimizeWordpress</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore">suppressSessionScore</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration">BotManagementStaleZoneConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fightMode`<sup>Required</sup> <a name="fightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fightMode"></a>

```java
public IResolvable getFightMode();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `optimizeWordpress`<sup>Required</sup> <a name="optimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress"></a>

```java
public IResolvable getOptimizeWordpress();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `sbfmDefinitelyAutomated`<sup>Required</sup> <a name="sbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated"></a>

```java
public java.lang.String getSbfmDefinitelyAutomated();
```

- *Type:* java.lang.String

---

##### `sbfmLikelyAutomated`<sup>Required</sup> <a name="sbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated"></a>

```java
public java.lang.String getSbfmLikelyAutomated();
```

- *Type:* java.lang.String

---

##### `sbfmStaticResourceProtection`<sup>Required</sup> <a name="sbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection"></a>

```java
public java.lang.String getSbfmStaticResourceProtection();
```

- *Type:* java.lang.String

---

##### `sbfmVerifiedBots`<sup>Required</sup> <a name="sbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots"></a>

```java
public java.lang.String getSbfmVerifiedBots();
```

- *Type:* java.lang.String

---

##### `suppressSessionScore`<sup>Required</sup> <a name="suppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore"></a>

```java
public IResolvable getSuppressSessionScore();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.internalValue"></a>

```java
public BotManagementStaleZoneConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration">BotManagementStaleZoneConfiguration</a>

---




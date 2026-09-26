# `turnstileWidget` Submodule <a name="`turnstileWidget` Submodule" id="@cdktn/provider-cloudflare.turnstileWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TurnstileWidget <a name="TurnstileWidget" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .domains(java.util.List<java.lang.String>)
    .mode(java.lang.String)
    .name(java.lang.String)
//  .botFightMode(java.lang.Boolean|IResolvable)
//  .clearanceLevel(java.lang.String)
//  .direction(java.lang.String)
//  .ephemeralId(java.lang.Boolean|IResolvable)
//  .filter(java.lang.String)
//  .offlabel(java.lang.Boolean|IResolvable)
//  .order(java.lang.String)
//  .page(java.lang.Number)
//  .perPage(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Widget Mode Available values: "non-interactive", "invisible", "managed". |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Human readable widget name. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.botFightMode">botFightMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive challenges in response to malicious bots (ENT only). |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.clearanceLevel">clearanceLevel</a></code> | <code>java.lang.String</code> | If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance, this setting can determine the clearance level to be set Available values: "no_clearance", "jschallenge", "managed", "interactive". |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order widgets. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.ephemeralId">ephemeralId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Return the Ephemeral ID in /siteverify (ENT only). |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Filter widgets by field using case-insensitive substring matching. Format: `field:value`. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.offlabel">offlabel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Do not show any Cloudflare branding on the widget (ENT only). |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to order widgets by. Available values: "id", "sitekey", "name", "created_on", "modified_on". |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.page">page</a></code> | <code>java.lang.Number</code> | Page number of paginated results. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.perPage">perPage</a></code> | <code>java.lang.Number</code> | Number of items per page. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this widget can be used. This cannot be changed after creation. Available values: "world", "china". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.domains"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Widget Mode Available values: "non-interactive", "invisible", "managed".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Human readable widget name.

Not unique. Cloudflare suggests that you
set this to a meaningful string to make it easier to identify your
widget, and where it is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#name TurnstileWidget#name}

---

##### `botFightMode`<sup>Optional</sup> <a name="botFightMode" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.botFightMode"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive challenges in response to malicious bots (ENT only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}

---

##### `clearanceLevel`<sup>Optional</sup> <a name="clearanceLevel" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.clearanceLevel"></a>

- *Type:* java.lang.String

If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance, this setting can determine the clearance level to be set Available values: "no_clearance", "jschallenge", "managed", "interactive".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#clearance_level TurnstileWidget#clearance_level}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Direction to order widgets. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#direction TurnstileWidget#direction}

---

##### `ephemeralId`<sup>Optional</sup> <a name="ephemeralId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.ephemeralId"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Return the Ephemeral ID in /siteverify (ENT only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#ephemeral_id TurnstileWidget#ephemeral_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Filter widgets by field using case-insensitive substring matching. Format: `field:value`.

Supported fields:

* `name` - Filter by widget name (e.g., `filter=name:login-form`)
* `sitekey` - Filter by sitekey (e.g., `filter=sitekey:0x4AAA`)

Returns 400 Bad Request if the field is unsupported or format is invalid.
An empty filter value returns all results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#filter TurnstileWidget#filter}

---

##### `offlabel`<sup>Optional</sup> <a name="offlabel" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.offlabel"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Do not show any Cloudflare branding on the widget (ENT only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to order widgets by. Available values: "id", "sitekey", "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#order TurnstileWidget#order}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.page"></a>

- *Type:* java.lang.Number

Page number of paginated results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#page TurnstileWidget#page}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.perPage"></a>

- *Type:* java.lang.Number

Number of items per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#per_page TurnstileWidget#per_page}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this widget can be used. This cannot be changed after creation. Available values: "world", "china".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#region TurnstileWidget#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode">resetBotFightMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetClearanceLevel">resetClearanceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetEphemeralId">resetEphemeralId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel">resetOfflabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetPerPage">resetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBotFightMode` <a name="resetBotFightMode" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode"></a>

```java
public void resetBotFightMode()
```

##### `resetClearanceLevel` <a name="resetClearanceLevel" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetClearanceLevel"></a>

```java
public void resetClearanceLevel()
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetEphemeralId` <a name="resetEphemeralId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetEphemeralId"></a>

```java
public void resetEphemeralId()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetOfflabel` <a name="resetOfflabel" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel"></a>

```java
public void resetOfflabel()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPage` <a name="resetPage" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetPage"></a>

```java
public void resetPage()
```

##### `resetPerPage` <a name="resetPerPage" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetPerPage"></a>

```java
public void resetPerPage()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TurnstileWidget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TurnstileWidget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TurnstileWidget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TurnstileWidget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TurnstileWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TurnstileWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.deployedVia">deployedVia</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lastModifiedVia">lastModifiedVia</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.sitekey">sitekey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput">botFightModeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.clearanceLevelInput">clearanceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.ephemeralIdInput">ephemeralIdInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput">offlabelInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.pageInput">pageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.perPageInput">perPageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode">botFightMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.clearanceLevel">clearanceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.ephemeralId">ephemeralId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel">offlabel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.page">page</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `deployedVia`<sup>Required</sup> <a name="deployedVia" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.deployedVia"></a>

```java
public java.lang.String getDeployedVia();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedVia`<sup>Required</sup> <a name="lastModifiedVia" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lastModifiedVia"></a>

```java
public java.lang.String getLastModifiedVia();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `sitekey`<sup>Required</sup> <a name="sitekey" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.sitekey"></a>

```java
public java.lang.String getSitekey();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `botFightModeInput`<sup>Optional</sup> <a name="botFightModeInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput"></a>

```java
public java.lang.Boolean|IResolvable getBotFightModeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clearanceLevelInput`<sup>Optional</sup> <a name="clearanceLevelInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.clearanceLevelInput"></a>

```java
public java.lang.String getClearanceLevelInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ephemeralIdInput`<sup>Optional</sup> <a name="ephemeralIdInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.ephemeralIdInput"></a>

```java
public java.lang.Boolean|IResolvable getEphemeralIdInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `offlabelInput`<sup>Optional</sup> <a name="offlabelInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput"></a>

```java
public java.lang.Boolean|IResolvable getOfflabelInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.pageInput"></a>

```java
public java.lang.Number getPageInput();
```

- *Type:* java.lang.Number

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.perPageInput"></a>

```java
public java.lang.Number getPerPageInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `botFightMode`<sup>Required</sup> <a name="botFightMode" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode"></a>

```java
public java.lang.Boolean|IResolvable getBotFightMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clearanceLevel`<sup>Required</sup> <a name="clearanceLevel" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.clearanceLevel"></a>

```java
public java.lang.String getClearanceLevel();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ephemeralId`<sup>Required</sup> <a name="ephemeralId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.ephemeralId"></a>

```java
public java.lang.Boolean|IResolvable getEphemeralId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `offlabel`<sup>Required</sup> <a name="offlabel" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel"></a>

```java
public java.lang.Boolean|IResolvable getOfflabel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TurnstileWidgetConfig <a name="TurnstileWidgetConfig" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.turnstile_widget.TurnstileWidgetConfig;

TurnstileWidgetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .domains(java.util.List<java.lang.String>)
    .mode(java.lang.String)
    .name(java.lang.String)
//  .botFightMode(java.lang.Boolean|IResolvable)
//  .clearanceLevel(java.lang.String)
//  .direction(java.lang.String)
//  .ephemeralId(java.lang.Boolean|IResolvable)
//  .filter(java.lang.String)
//  .offlabel(java.lang.Boolean|IResolvable)
//  .order(java.lang.String)
//  .page(java.lang.Number)
//  .perPage(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Widget Mode Available values: "non-interactive", "invisible", "managed". |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Human readable widget name. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode">botFightMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive challenges in response to malicious bots (ENT only). |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.clearanceLevel">clearanceLevel</a></code> | <code>java.lang.String</code> | If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance, this setting can determine the clearance level to be set Available values: "no_clearance", "jschallenge", "managed", "interactive". |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order widgets. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.ephemeralId">ephemeralId</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Return the Ephemeral ID in /siteverify (ENT only). |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Filter widgets by field using case-insensitive substring matching. Format: `field:value`. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel">offlabel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Do not show any Cloudflare branding on the widget (ENT only). |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to order widgets by. Available values: "id", "sitekey", "name", "created_on", "modified_on". |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.page">page</a></code> | <code>java.lang.Number</code> | Page number of paginated results. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.perPage">perPage</a></code> | <code>java.lang.Number</code> | Number of items per page. |
| <code><a href="#@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this widget can be used. This cannot be changed after creation. Available values: "world", "china". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Widget Mode Available values: "non-interactive", "invisible", "managed".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Human readable widget name.

Not unique. Cloudflare suggests that you
set this to a meaningful string to make it easier to identify your
widget, and where it is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#name TurnstileWidget#name}

---

##### `botFightMode`<sup>Optional</sup> <a name="botFightMode" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode"></a>

```java
public java.lang.Boolean|IResolvable getBotFightMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive challenges in response to malicious bots (ENT only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}

---

##### `clearanceLevel`<sup>Optional</sup> <a name="clearanceLevel" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.clearanceLevel"></a>

```java
public java.lang.String getClearanceLevel();
```

- *Type:* java.lang.String

If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance, this setting can determine the clearance level to be set Available values: "no_clearance", "jschallenge", "managed", "interactive".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#clearance_level TurnstileWidget#clearance_level}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction to order widgets. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#direction TurnstileWidget#direction}

---

##### `ephemeralId`<sup>Optional</sup> <a name="ephemeralId" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.ephemeralId"></a>

```java
public java.lang.Boolean|IResolvable getEphemeralId();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Return the Ephemeral ID in /siteverify (ENT only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#ephemeral_id TurnstileWidget#ephemeral_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Filter widgets by field using case-insensitive substring matching. Format: `field:value`.

Supported fields:

* `name` - Filter by widget name (e.g., `filter=name:login-form`)
* `sitekey` - Filter by sitekey (e.g., `filter=sitekey:0x4AAA`)

Returns 400 Bad Request if the field is unsupported or format is invalid.
An empty filter value returns all results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#filter TurnstileWidget#filter}

---

##### `offlabel`<sup>Optional</sup> <a name="offlabel" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel"></a>

```java
public java.lang.Boolean|IResolvable getOfflabel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Do not show any Cloudflare branding on the widget (ENT only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order widgets by. Available values: "id", "sitekey", "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#order TurnstileWidget#order}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

Page number of paginated results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#page TurnstileWidget#page}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.perPage"></a>

```java
public java.lang.Number getPerPage();
```

- *Type:* java.lang.Number

Number of items per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#per_page TurnstileWidget#per_page}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this widget can be used. This cannot be changed after creation. Available values: "world", "china".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/turnstile_widget#region TurnstileWidget#region}

---




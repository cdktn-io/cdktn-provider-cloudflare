# `flagshipFlag` Submodule <a name="`flagshipFlag` Submodule" id="@cdktn/provider-cloudflare.flagshipFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlagshipFlag <a name="FlagshipFlag" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag cloudflare_flagship_flag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlag;

FlagshipFlag.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .appId(java.lang.String)
    .defaultVariation(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .key(java.lang.String)
    .rules(IResolvable|java.util.List<FlagshipFlagRules>)
    .variations(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .flagKey(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | App identifier. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.defaultVariation">defaultVariation</a></code> | <code>java.lang.String</code> | Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When false, the flag bypasses all rules and always serves `default_variation`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Unique identifier for the flag within an app. Used in all evaluation and SDK calls. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>></code> | Targeting rules evaluated in ascending `priority`; |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.variations">variations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of variation name to value. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#description FlagshipFlag#description}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.flagKey">flagKey</a></code> | <code>java.lang.String</code> | Flag key (slug). |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Value type of the flag's variations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#account_id FlagshipFlag#account_id}

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#app_id FlagshipFlag#app_id}

---

##### `defaultVariation`<sup>Required</sup> <a name="defaultVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.defaultVariation"></a>

- *Type:* java.lang.String

Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#default_variation FlagshipFlag#default_variation}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When false, the flag bypasses all rules and always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#enabled FlagshipFlag#enabled}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Unique identifier for the flag within an app. Used in all evaluation and SDK calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#key FlagshipFlag#key}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>>

Targeting rules evaluated in ascending `priority`;

the first matching rule wins. An empty array means the flag always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rules FlagshipFlag#rules}

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.variations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of variation name to value.

All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#variations FlagshipFlag#variations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#description FlagshipFlag#description}.

---

##### `flagKey`<sup>Optional</sup> <a name="flagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.flagKey"></a>

- *Type:* java.lang.String

Flag key (slug).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#flag_key FlagshipFlag#flag_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Value type of the flag's variations.

Inferred from the variation values on write, so it may be omitted in requests.
Available values: "boolean", "string", "number", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#type FlagshipFlag#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetFlagKey">resetFlagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<FlagshipFlagRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFlagKey` <a name="resetFlagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetFlagKey"></a>

```java
public void resetFlagKey()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FlagshipFlag resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlag;

FlagshipFlag.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlag;

FlagshipFlag.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlag;

FlagshipFlag.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlag;

FlagshipFlag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FlagshipFlag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FlagshipFlag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FlagshipFlag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FlagshipFlag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FlagshipFlag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList">FlagshipFlagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariationInput">defaultVariationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKeyInput">flagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variationsInput">variationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariation">defaultVariation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKey">flagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variations">variations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rules"></a>

```java
public FlagshipFlagRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList">FlagshipFlagRulesList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `defaultVariationInput`<sup>Optional</sup> <a name="defaultVariationInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariationInput"></a>

```java
public java.lang.String getDefaultVariationInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `flagKeyInput`<sup>Optional</sup> <a name="flagKeyInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKeyInput"></a>

```java
public java.lang.String getFlagKeyInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rulesInput"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `variationsInput`<sup>Optional</sup> <a name="variationsInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `defaultVariation`<sup>Required</sup> <a name="defaultVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariation"></a>

```java
public java.lang.String getDefaultVariation();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKey"></a>

```java
public java.lang.String getFlagKey();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FlagshipFlagConfig <a name="FlagshipFlagConfig" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagConfig;

FlagshipFlagConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .appId(java.lang.String)
    .defaultVariation(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .key(java.lang.String)
    .rules(IResolvable|java.util.List<FlagshipFlagRules>)
    .variations(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .flagKey(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | App identifier. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.defaultVariation">defaultVariation</a></code> | <code>java.lang.String</code> | Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When false, the flag bypasses all rules and always serves `default_variation`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.key">key</a></code> | <code>java.lang.String</code> | Unique identifier for the flag within an app. Used in all evaluation and SDK calls. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>></code> | Targeting rules evaluated in ascending `priority`; |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.variations">variations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of variation name to value. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#description FlagshipFlag#description}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.flagKey">flagKey</a></code> | <code>java.lang.String</code> | Flag key (slug). |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.type">type</a></code> | <code>java.lang.String</code> | Value type of the flag's variations. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#account_id FlagshipFlag#account_id}

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#app_id FlagshipFlag#app_id}

---

##### `defaultVariation`<sup>Required</sup> <a name="defaultVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.defaultVariation"></a>

```java
public java.lang.String getDefaultVariation();
```

- *Type:* java.lang.String

Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#default_variation FlagshipFlag#default_variation}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When false, the flag bypasses all rules and always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#enabled FlagshipFlag#enabled}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Unique identifier for the flag within an app. Used in all evaluation and SDK calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#key FlagshipFlag#key}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.rules"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>>

Targeting rules evaluated in ascending `priority`;

the first matching rule wins. An empty array means the flag always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rules FlagshipFlag#rules}

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.variations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of variation name to value.

All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#variations FlagshipFlag#variations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#description FlagshipFlag#description}.

---

##### `flagKey`<sup>Optional</sup> <a name="flagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.flagKey"></a>

```java
public java.lang.String getFlagKey();
```

- *Type:* java.lang.String

Flag key (slug).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#flag_key FlagshipFlag#flag_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Value type of the flag's variations.

Inferred from the variation values on write, so it may be omitted in requests.
Available values: "boolean", "string", "number", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#type FlagshipFlag#type}

---

### FlagshipFlagRules <a name="FlagshipFlagRules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRules;

FlagshipFlagRules.builder()
    .conditions(IResolvable|java.util.List<FlagshipFlagRulesConditions>)
    .priority(java.lang.Number)
    .serveVariation(java.lang.String)
//  .rollout(FlagshipFlagRulesRollout)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>></code> | Conditions the context must satisfy for this rule to match. An empty array matches all contexts. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.priority">priority</a></code> | <code>java.lang.Number</code> | Evaluation order; lower numbers are evaluated first. Must be unique across the flag's rules. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.serveVariation">serveVariation</a></code> | <code>java.lang.String</code> | Variation served when this rule matches. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.rollout">rollout</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rollout FlagshipFlag#rollout}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.conditions"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRulesConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>>

Conditions the context must satisfy for this rule to match. An empty array matches all contexts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#conditions FlagshipFlag#conditions}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Evaluation order; lower numbers are evaluated first. Must be unique across the flag's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#priority FlagshipFlag#priority}

---

##### `serveVariation`<sup>Required</sup> <a name="serveVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.serveVariation"></a>

```java
public java.lang.String getServeVariation();
```

- *Type:* java.lang.String

Variation served when this rule matches. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#serve_variation FlagshipFlag#serve_variation}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.rollout"></a>

```java
public FlagshipFlagRulesRollout getRollout();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rollout FlagshipFlag#rollout}.

---

### FlagshipFlagRulesConditions <a name="FlagshipFlagRulesConditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesConditions;

FlagshipFlagRulesConditions.builder()
//  .attribute(java.lang.String)
//  .clauses(IResolvable|java.util.List<FlagshipFlagRulesConditionsClauses>)
//  .logicalOperator(java.lang.String)
//  .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.clauses">clauses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.logicalOperator">logicalOperator</a></code> | <code>java.lang.String</code> | Available values: "AND", "OR". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.operator">operator</a></code> | <code>java.lang.String</code> | Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.value">value</a></code> | <code>java.lang.String</code> | Value to compare against the context attribute. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}.

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.clauses"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRulesConditionsClauses> getClauses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}.

---

##### `logicalOperator`<sup>Optional</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.logicalOperator"></a>

```java
public java.lang.String getLogicalOperator();
```

- *Type:* java.lang.String

Available values: "AND", "OR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#operator FlagshipFlag#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value to compare against the context attribute.

Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#value FlagshipFlag#value}

---

### FlagshipFlagRulesConditionsClauses <a name="FlagshipFlagRulesConditionsClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesConditionsClauses;

FlagshipFlagRulesConditionsClauses.builder()
//  .attribute(java.lang.String)
//  .clauses(IResolvable|java.util.List<FlagshipFlagRulesConditionsClauses>)
//  .logicalOperator(java.lang.String)
//  .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.clauses">clauses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.logicalOperator">logicalOperator</a></code> | <code>java.lang.String</code> | Available values: "AND", "OR". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.operator">operator</a></code> | <code>java.lang.String</code> | Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.value">value</a></code> | <code>java.lang.String</code> | Value to compare against the context attribute. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}.

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.clauses"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRulesConditionsClauses> getClauses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}.

---

##### `logicalOperator`<sup>Optional</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.logicalOperator"></a>

```java
public java.lang.String getLogicalOperator();
```

- *Type:* java.lang.String

Available values: "AND", "OR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#operator FlagshipFlag#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value to compare against the context attribute.

Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#value FlagshipFlag#value}

---

### FlagshipFlagRulesRollout <a name="FlagshipFlagRulesRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesRollout;

FlagshipFlagRulesRollout.builder()
    .percentage(java.lang.Number)
//  .attribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | Percentage of matching traffic (0–100) served this variation. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

Percentage of matching traffic (0–100) served this variation.

For multi-way splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#percentage FlagshipFlag#percentage}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}

---

## Classes <a name="Classes" id="Classes"></a>

### FlagshipFlagRulesConditionsClausesList <a name="FlagshipFlagRulesConditionsClausesList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesConditionsClausesList;

new FlagshipFlagRulesConditionsClausesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get"></a>

```java
public FlagshipFlagRulesConditionsClausesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRulesConditionsClauses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>>

---


### FlagshipFlagRulesConditionsClausesOutputReference <a name="FlagshipFlagRulesConditionsClausesOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesConditionsClausesOutputReference;

new FlagshipFlagRulesConditionsClausesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses">putClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetClauses">resetClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetLogicalOperator">resetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClauses` <a name="putClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses"></a>

```java
public void putClauses(IResolvable|java.util.List<FlagshipFlagRulesConditionsClauses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>>

---

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetClauses` <a name="resetClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetClauses"></a>

```java
public void resetClauses()
```

##### `resetLogicalOperator` <a name="resetLogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetLogicalOperator"></a>

```java
public void resetLogicalOperator()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clausesInput">clausesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperatorInput">logicalOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clauses"></a>

```java
public FlagshipFlagRulesConditionsClausesList getClauses();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `clausesInput`<sup>Optional</sup> <a name="clausesInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clausesInput"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRulesConditionsClauses> getClausesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>>

---

##### `logicalOperatorInput`<sup>Optional</sup> <a name="logicalOperatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperatorInput"></a>

```java
public java.lang.String getLogicalOperatorInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator"></a>

```java
public java.lang.String getLogicalOperator();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.internalValue"></a>

```java
public IResolvable|FlagshipFlagRulesConditionsClauses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>

---


### FlagshipFlagRulesConditionsList <a name="FlagshipFlagRulesConditionsList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesConditionsList;

new FlagshipFlagRulesConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get"></a>

```java
public FlagshipFlagRulesConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRulesConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>>

---


### FlagshipFlagRulesConditionsOutputReference <a name="FlagshipFlagRulesConditionsOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesConditionsOutputReference;

new FlagshipFlagRulesConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses">putClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetClauses">resetClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetLogicalOperator">resetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClauses` <a name="putClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses"></a>

```java
public void putClauses(IResolvable|java.util.List<FlagshipFlagRulesConditionsClauses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>>

---

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetClauses` <a name="resetClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetClauses"></a>

```java
public void resetClauses()
```

##### `resetLogicalOperator` <a name="resetLogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetLogicalOperator"></a>

```java
public void resetLogicalOperator()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clausesInput">clausesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperatorInput">logicalOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clauses"></a>

```java
public FlagshipFlagRulesConditionsClausesList getClauses();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `clausesInput`<sup>Optional</sup> <a name="clausesInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clausesInput"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRulesConditionsClauses> getClausesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>>

---

##### `logicalOperatorInput`<sup>Optional</sup> <a name="logicalOperatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperatorInput"></a>

```java
public java.lang.String getLogicalOperatorInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperator"></a>

```java
public java.lang.String getLogicalOperator();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|FlagshipFlagRulesConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>

---


### FlagshipFlagRulesList <a name="FlagshipFlagRulesList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesList;

new FlagshipFlagRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get"></a>

```java
public FlagshipFlagRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>>

---


### FlagshipFlagRulesOutputReference <a name="FlagshipFlagRulesOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesOutputReference;

new FlagshipFlagRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout">putRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resetRollout">resetRollout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<FlagshipFlagRulesConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>>

---

##### `putRollout` <a name="putRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout"></a>

```java
public void putRollout(FlagshipFlagRulesRollout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---

##### `resetRollout` <a name="resetRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resetRollout"></a>

```java
public void resetRollout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList">FlagshipFlagRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rollout">rollout</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference">FlagshipFlagRulesRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rolloutInput">rolloutInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariationInput">serveVariationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariation">serveVariation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditions"></a>

```java
public FlagshipFlagRulesConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList">FlagshipFlagRulesConditionsList</a>

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rollout"></a>

```java
public FlagshipFlagRulesRolloutOutputReference getRollout();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference">FlagshipFlagRulesRolloutOutputReference</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<FlagshipFlagRulesConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `rolloutInput`<sup>Optional</sup> <a name="rolloutInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rolloutInput"></a>

```java
public IResolvable|FlagshipFlagRulesRollout getRolloutInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---

##### `serveVariationInput`<sup>Optional</sup> <a name="serveVariationInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariationInput"></a>

```java
public java.lang.String getServeVariationInput();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serveVariation`<sup>Required</sup> <a name="serveVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariation"></a>

```java
public java.lang.String getServeVariation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|FlagshipFlagRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>

---


### FlagshipFlagRulesRolloutOutputReference <a name="FlagshipFlagRulesRolloutOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.flagship_flag.FlagshipFlagRulesRolloutOutputReference;

new FlagshipFlagRulesRolloutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.internalValue"></a>

```java
public IResolvable|FlagshipFlagRulesRollout getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---




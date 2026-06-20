# `dataCloudflareUserAgentBlockingRule` Submodule <a name="`dataCloudflareUserAgentBlockingRule` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareUserAgentBlockingRule <a name="DataCloudflareUserAgentBlockingRule" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRule;

DataCloudflareUserAgentBlockingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(DataCloudflareUserAgentBlockingRuleFilter)
//  .uaRuleId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#filter DataCloudflareUserAgentBlockingRule#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.uaRuleId">uaRuleId</a></code> | <code>java.lang.String</code> | The unique identifier of the User Agent Blocking rule. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Defines an identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#filter DataCloudflareUserAgentBlockingRule#filter}.

---

##### `uaRuleId`<sup>Optional</sup> <a name="uaRuleId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.uaRuleId"></a>

- *Type:* java.lang.String

The unique identifier of the User Agent Blocking rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#ua_rule_id DataCloudflareUserAgentBlockingRule#ua_rule_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#zone_id DataCloudflareUserAgentBlockingRule#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetUaRuleId">resetUaRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.putFilter"></a>

```java
public void putFilter(DataCloudflareUserAgentBlockingRuleFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetUaRuleId` <a name="resetUaRuleId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetUaRuleId"></a>

```java
public void resetUaRuleId()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareUserAgentBlockingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRule;

DataCloudflareUserAgentBlockingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRule;

DataCloudflareUserAgentBlockingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRule;

DataCloudflareUserAgentBlockingRule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRule;

DataCloudflareUserAgentBlockingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareUserAgentBlockingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareUserAgentBlockingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareUserAgentBlockingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareUserAgentBlockingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareUserAgentBlockingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference">DataCloudflareUserAgentBlockingRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference">DataCloudflareUserAgentBlockingRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.paused">paused</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleIdInput">uaRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleId">uaRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.configuration"></a>

```java
public DataCloudflareUserAgentBlockingRuleConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference">DataCloudflareUserAgentBlockingRuleConfigurationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filter"></a>

```java
public DataCloudflareUserAgentBlockingRuleFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference">DataCloudflareUserAgentBlockingRuleFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.paused"></a>

```java
public IResolvable getPaused();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filterInput"></a>

```java
public IResolvable|DataCloudflareUserAgentBlockingRuleFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

---

##### `uaRuleIdInput`<sup>Optional</sup> <a name="uaRuleIdInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleIdInput"></a>

```java
public java.lang.String getUaRuleIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `uaRuleId`<sup>Required</sup> <a name="uaRuleId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleId"></a>

```java
public java.lang.String getUaRuleId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareUserAgentBlockingRuleConfig <a name="DataCloudflareUserAgentBlockingRuleConfig" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRuleConfig;

DataCloudflareUserAgentBlockingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(DataCloudflareUserAgentBlockingRuleFilter)
//  .uaRuleId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#filter DataCloudflareUserAgentBlockingRule#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.uaRuleId">uaRuleId</a></code> | <code>java.lang.String</code> | The unique identifier of the User Agent Blocking rule. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Defines an identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.filter"></a>

```java
public DataCloudflareUserAgentBlockingRuleFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#filter DataCloudflareUserAgentBlockingRule#filter}.

---

##### `uaRuleId`<sup>Optional</sup> <a name="uaRuleId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.uaRuleId"></a>

```java
public java.lang.String getUaRuleId();
```

- *Type:* java.lang.String

The unique identifier of the User Agent Blocking rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#ua_rule_id DataCloudflareUserAgentBlockingRule#ua_rule_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#zone_id DataCloudflareUserAgentBlockingRule#zone_id}

---

### DataCloudflareUserAgentBlockingRuleConfiguration <a name="DataCloudflareUserAgentBlockingRuleConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRuleConfiguration;

DataCloudflareUserAgentBlockingRuleConfiguration.builder()
    .build();
```


### DataCloudflareUserAgentBlockingRuleFilter <a name="DataCloudflareUserAgentBlockingRuleFilter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRuleFilter;

DataCloudflareUserAgentBlockingRuleFilter.builder()
//  .description(java.lang.String)
//  .paused(java.lang.Boolean|IResolvable)
//  .userAgent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.description">description</a></code> | <code>java.lang.String</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.paused">paused</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, indicates that the rule is currently paused. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.userAgent">userAgent</a></code> | <code>java.lang.String</code> | A string to search for in the user agent values of existing rules. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#description DataCloudflareUserAgentBlockingRule#description}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.paused"></a>

```java
public java.lang.Boolean|IResolvable getPaused();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, indicates that the rule is currently paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#paused DataCloudflareUserAgentBlockingRule#paused}

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.userAgent"></a>

```java
public java.lang.String getUserAgent();
```

- *Type:* java.lang.String

A string to search for in the user agent values of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/user_agent_blocking_rule#user_agent DataCloudflareUserAgentBlockingRule#user_agent}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareUserAgentBlockingRuleConfigurationOutputReference <a name="DataCloudflareUserAgentBlockingRuleConfigurationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference;

new DataCloudflareUserAgentBlockingRuleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration">DataCloudflareUserAgentBlockingRuleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.internalValue"></a>

```java
public DataCloudflareUserAgentBlockingRuleConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration">DataCloudflareUserAgentBlockingRuleConfiguration</a>

---


### DataCloudflareUserAgentBlockingRuleFilterOutputReference <a name="DataCloudflareUserAgentBlockingRuleFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_user_agent_blocking_rule.DataCloudflareUserAgentBlockingRuleFilterOutputReference;

new DataCloudflareUserAgentBlockingRuleFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetUserAgent">resetUserAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPaused` <a name="resetPaused" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetUserAgent` <a name="resetUserAgent" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetUserAgent"></a>

```java
public void resetUserAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgentInput">userAgentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.paused">paused</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgent">userAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.pausedInput"></a>

```java
public java.lang.Boolean|IResolvable getPausedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userAgentInput`<sup>Optional</sup> <a name="userAgentInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgentInput"></a>

```java
public java.lang.String getUserAgentInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.paused"></a>

```java
public java.lang.Boolean|IResolvable getPaused();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userAgent`<sup>Required</sup> <a name="userAgent" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgent"></a>

```java
public java.lang.String getUserAgent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareUserAgentBlockingRuleFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

---




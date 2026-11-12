# `logExplorerDataset` Submodule <a name="`logExplorerDataset` Submodule" id="@cdktn/provider-cloudflare.logExplorerDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogExplorerDataset <a name="LogExplorerDataset" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset cloudflare_log_explorer_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.log_explorer_dataset.LogExplorerDataset;

LogExplorerDataset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataset(java.lang.String)
//  .accountId(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .fields(IResolvable|java.util.List<LogExplorerDatasetFields>)
//  .filter(java.lang.String)
//  .filterAttackTraffic(java.lang.Boolean|IResolvable)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.dataset">dataset</a></code> | <code>java.lang.String</code> | Dataset type name to create (e.g. `http_requests`). |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to `false` to allow deletion of this dataset. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable or disable log ingest for this dataset. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>></code> | Controls which fields the API ingests. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Optional Logpush filter predicate to restrict which events are ingested. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.filterAttackTraffic">filterAttackTraffic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to filter attack traffic from the Logpush job. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.dataset"></a>

- *Type:* java.lang.String

Dataset type name to create (e.g. `http_requests`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#dataset LogExplorerDataset#dataset}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#account_id LogExplorerDataset#account_id}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to `false` to allow deletion of this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#deletion_protection LogExplorerDataset#deletion_protection}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable or disable log ingest for this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#enabled LogExplorerDataset#enabled}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.fields"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>>

Controls which fields the API ingests.

Defaults to all available
fields when absent.
Each dataset requires its own timestamp field to remain enabled (the
field name varies per dataset type); omitting it from an explicit
selection is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#fields LogExplorerDataset#fields}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Optional Logpush filter predicate to restrict which events are ingested.

Omitting this attribute means no filter. An empty string also means no filter.
Removing a configured filter sends an empty string to clear it in the API.
The provider stores missing or null API filters as empty strings in state.
See [Logpush filters](https://developers.cloudflare.com/logs/reference/filters/)
for syntax and examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#filter LogExplorerDataset#filter}

---

##### `filterAttackTraffic`<sup>Optional</sup> <a name="filterAttackTraffic" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.filterAttackTraffic"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to filter attack traffic from the Logpush job.

The API defaults to true on creation for http_requests, firewall_events, and network_analytics_logs. If omitted on update, the existing setting is kept. The API omits this setting for datasets that do not support it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#filter_attack_traffic LogExplorerDataset#filter_attack_traffic}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#zone_id LogExplorerDataset#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFilterAttackTraffic">resetFilterAttackTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<LogExplorerDatasetFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFields` <a name="resetFields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFields"></a>

```java
public void resetFields()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFilterAttackTraffic` <a name="resetFilterAttackTraffic" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetFilterAttackTraffic"></a>

```java
public void resetFilterAttackTraffic()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogExplorerDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.log_explorer_dataset.LogExplorerDataset;

LogExplorerDataset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.log_explorer_dataset.LogExplorerDataset;

LogExplorerDataset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.log_explorer_dataset.LogExplorerDataset;

LogExplorerDataset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.log_explorer_dataset.LogExplorerDataset;

LogExplorerDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogExplorerDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogExplorerDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogExplorerDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogExplorerDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogExplorerDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList">LogExplorerDatasetFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterAttackTrafficInput">filterAttackTrafficInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterAttackTraffic">filterAttackTraffic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fields"></a>

```java
public LogExplorerDatasetFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList">LogExplorerDatasetFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<LogExplorerDatasetFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>>

---

##### `filterAttackTrafficInput`<sup>Optional</sup> <a name="filterAttackTrafficInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterAttackTrafficInput"></a>

```java
public java.lang.Boolean|IResolvable getFilterAttackTrafficInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `filterAttackTraffic`<sup>Required</sup> <a name="filterAttackTraffic" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.filterAttackTraffic"></a>

```java
public java.lang.Boolean|IResolvable getFilterAttackTraffic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDataset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogExplorerDatasetConfig <a name="LogExplorerDatasetConfig" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.log_explorer_dataset.LogExplorerDatasetConfig;

LogExplorerDatasetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataset(java.lang.String)
//  .accountId(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .fields(IResolvable|java.util.List<LogExplorerDatasetFields>)
//  .filter(java.lang.String)
//  .filterAttackTraffic(java.lang.Boolean|IResolvable)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.dataset">dataset</a></code> | <code>java.lang.String</code> | Dataset type name to create (e.g. `http_requests`). |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to `false` to allow deletion of this dataset. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable or disable log ingest for this dataset. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>></code> | Controls which fields the API ingests. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Optional Logpush filter predicate to restrict which events are ingested. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.filterAttackTraffic">filterAttackTraffic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to filter attack traffic from the Logpush job. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

Dataset type name to create (e.g. `http_requests`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#dataset LogExplorerDataset#dataset}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#account_id LogExplorerDataset#account_id}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to `false` to allow deletion of this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#deletion_protection LogExplorerDataset#deletion_protection}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable or disable log ingest for this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#enabled LogExplorerDataset#enabled}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.fields"></a>

```java
public IResolvable|java.util.List<LogExplorerDatasetFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>>

Controls which fields the API ingests.

Defaults to all available
fields when absent.
Each dataset requires its own timestamp field to remain enabled (the
field name varies per dataset type); omitting it from an explicit
selection is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#fields LogExplorerDataset#fields}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Optional Logpush filter predicate to restrict which events are ingested.

Omitting this attribute means no filter. An empty string also means no filter.
Removing a configured filter sends an empty string to clear it in the API.
The provider stores missing or null API filters as empty strings in state.
See [Logpush filters](https://developers.cloudflare.com/logs/reference/filters/)
for syntax and examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#filter LogExplorerDataset#filter}

---

##### `filterAttackTraffic`<sup>Optional</sup> <a name="filterAttackTraffic" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.filterAttackTraffic"></a>

```java
public java.lang.Boolean|IResolvable getFilterAttackTraffic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to filter attack traffic from the Logpush job.

The API defaults to true on creation for http_requests, firewall_events, and network_analytics_logs. If omitted on update, the existing setting is kept. The API omits this setting for datasets that do not support it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#filter_attack_traffic LogExplorerDataset#filter_attack_traffic}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#zone_id LogExplorerDataset#zone_id}

---

### LogExplorerDatasetFields <a name="LogExplorerDatasetFields" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.log_explorer_dataset.LogExplorerDatasetFields;

LogExplorerDatasetFields.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the API includes this field in log ingest. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.property.name">name</a></code> | <code>java.lang.String</code> | Field name. Names are matched without regard to case. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the API includes this field in log ingest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#enabled LogExplorerDataset#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Field name. Names are matched without regard to case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/log_explorer_dataset#name LogExplorerDataset#name}

---

## Classes <a name="Classes" id="Classes"></a>

### LogExplorerDatasetFieldsList <a name="LogExplorerDatasetFieldsList" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.log_explorer_dataset.LogExplorerDatasetFieldsList;

new LogExplorerDatasetFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.get"></a>

```java
public LogExplorerDatasetFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogExplorerDatasetFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>>

---


### LogExplorerDatasetFieldsOutputReference <a name="LogExplorerDatasetFieldsOutputReference" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.log_explorer_dataset.LogExplorerDatasetFieldsOutputReference;

new LogExplorerDatasetFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|LogExplorerDatasetFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.logExplorerDataset.LogExplorerDatasetFields">LogExplorerDatasetFields</a>

---




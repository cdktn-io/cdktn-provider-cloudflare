# `dataCloudflareApiShieldDiscoveryOperations` Submodule <a name="`dataCloudflareApiShieldDiscoveryOperations` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiShieldDiscoveryOperations <a name="DataCloudflareApiShieldDiscoveryOperations" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperations;

DataCloudflareApiShieldDiscoveryOperations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .diff(java.lang.Boolean|IResolvable)
//  .direction(java.lang.String)
//  .endpoint(java.lang.String)
//  .host(java.util.List<java.lang.String>)
//  .maxItems(java.lang.Number)
//  .method(java.util.List<java.lang.String>)
//  .order(java.lang.String)
//  .origin(java.lang.String)
//  .state(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.diff">diff</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Filter results to only include endpoints containing this pattern. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.host">host</a></code> | <code>java.util.List<java.lang.String></code> | Filter results to only include the specified hosts. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.method">method</a></code> | <code>java.util.List<java.lang.String></code> | Filter results to only include the specified HTTP methods. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to order by Available values: "host", "method", "endpoint", "traffic_stats.requests", "traffic_stats.last_updated". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.origin">origin</a></code> | <code>java.lang.String</code> | Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery Available values: "ML", "SessionIdentifier", "LabelDiscovery". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Filter results to only include discovery results in a particular state. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `diff`<sup>Optional</sup> <a name="diff" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.diff"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#diff DataCloudflareApiShieldDiscoveryOperations#diff}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#direction DataCloudflareApiShieldDiscoveryOperations#direction}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

Filter results to only include endpoints containing this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#endpoint DataCloudflareApiShieldDiscoveryOperations#endpoint}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.host"></a>

- *Type:* java.util.List<java.lang.String>

Filter results to only include the specified hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#host DataCloudflareApiShieldDiscoveryOperations#host}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#max_items DataCloudflareApiShieldDiscoveryOperations#max_items}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.method"></a>

- *Type:* java.util.List<java.lang.String>

Filter results to only include the specified HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#method DataCloudflareApiShieldDiscoveryOperations#method}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to order by Available values: "host", "method", "endpoint", "traffic_stats.requests", "traffic_stats.last_updated".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#order DataCloudflareApiShieldDiscoveryOperations#order}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.origin"></a>

- *Type:* java.lang.String

Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery Available values: "ML", "SessionIdentifier", "LabelDiscovery".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#origin DataCloudflareApiShieldDiscoveryOperations#origin}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Filter results to only include discovery results in a particular state.

States are as follows

* `review` - Discovered operations that are not saved into API Shield Endpoint Management
* `saved` - Discovered operations that are already saved into API Shield Endpoint Management
* `ignored` - Discovered operations that have been marked as ignored
  Available values: "review", "saved", "ignored".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#state DataCloudflareApiShieldDiscoveryOperations#state}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#zone_id DataCloudflareApiShieldDiscoveryOperations#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff">resetDiff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDiff` <a name="resetDiff" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff"></a>

```java
public void resetDiff()
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost"></a>

```java
public void resetHost()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin"></a>

```java
public void resetOrigin()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState"></a>

```java
public void resetState()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperations;

DataCloudflareApiShieldDiscoveryOperations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperations;

DataCloudflareApiShieldDiscoveryOperations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperations;

DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperations;

DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareApiShieldDiscoveryOperations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareApiShieldDiscoveryOperations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiShieldDiscoveryOperations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput">diffInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput">hostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput">methodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput">originInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff">diff</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host">host</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result"></a>

```java
public DataCloudflareApiShieldDiscoveryOperationsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a>

---

##### `diffInput`<sup>Optional</sup> <a name="diffInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput"></a>

```java
public java.lang.Boolean|IResolvable getDiffInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput"></a>

```java
public java.util.List<java.lang.String> getHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput"></a>

```java
public java.util.List<java.lang.String> getMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput"></a>

```java
public java.lang.String getOriginInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `diff`<sup>Required</sup> <a name="diff" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff"></a>

```java
public java.lang.Boolean|IResolvable getDiff();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host"></a>

```java
public java.util.List<java.lang.String> getHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiShieldDiscoveryOperationsConfig <a name="DataCloudflareApiShieldDiscoveryOperationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperationsConfig;

DataCloudflareApiShieldDiscoveryOperationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .diff(java.lang.Boolean|IResolvable)
//  .direction(java.lang.String)
//  .endpoint(java.lang.String)
//  .host(java.util.List<java.lang.String>)
//  .maxItems(java.lang.Number)
//  .method(java.util.List<java.lang.String>)
//  .order(java.lang.String)
//  .origin(java.lang.String)
//  .state(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff">diff</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Filter results to only include endpoints containing this pattern. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host">host</a></code> | <code>java.util.List<java.lang.String></code> | Filter results to only include the specified hosts. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | Filter results to only include the specified HTTP methods. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to order by Available values: "host", "method", "endpoint", "traffic_stats.requests", "traffic_stats.last_updated". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin">origin</a></code> | <code>java.lang.String</code> | Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery Available values: "ML", "SessionIdentifier", "LabelDiscovery". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Filter results to only include discovery results in a particular state. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `diff`<sup>Optional</sup> <a name="diff" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff"></a>

```java
public java.lang.Boolean|IResolvable getDiff();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#diff DataCloudflareApiShieldDiscoveryOperations#diff}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#direction DataCloudflareApiShieldDiscoveryOperations#direction}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Filter results to only include endpoints containing this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#endpoint DataCloudflareApiShieldDiscoveryOperations#endpoint}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host"></a>

```java
public java.util.List<java.lang.String> getHost();
```

- *Type:* java.util.List<java.lang.String>

Filter results to only include the specified hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#host DataCloudflareApiShieldDiscoveryOperations#host}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#max_items DataCloudflareApiShieldDiscoveryOperations#max_items}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

Filter results to only include the specified HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#method DataCloudflareApiShieldDiscoveryOperations#method}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order by Available values: "host", "method", "endpoint", "traffic_stats.requests", "traffic_stats.last_updated".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#order DataCloudflareApiShieldDiscoveryOperations#order}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery Available values: "ML", "SessionIdentifier", "LabelDiscovery".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#origin DataCloudflareApiShieldDiscoveryOperations#origin}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Filter results to only include discovery results in a particular state.

States are as follows

* `review` - Discovered operations that are not saved into API Shield Endpoint Management
* `saved` - Discovered operations that are already saved into API Shield Endpoint Management
* `ignored` - Discovered operations that have been marked as ignored
  Available values: "review", "saved", "ignored".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#state DataCloudflareApiShieldDiscoveryOperations#state}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/api_shield_discovery_operations#zone_id DataCloudflareApiShieldDiscoveryOperations#zone_id}

---

### DataCloudflareApiShieldDiscoveryOperationsResult <a name="DataCloudflareApiShieldDiscoveryOperationsResult" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperationsResult;

DataCloudflareApiShieldDiscoveryOperationsResult.builder()
    .build();
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeatures <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeatures" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures;

DataCloudflareApiShieldDiscoveryOperationsResultFeatures.builder()
    .build();
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats;

DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference;

new DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats">trafficStats</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trafficStats`<sup>Required</sup> <a name="trafficStats" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats"></a>

```java
public DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference getTrafficStats();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue"></a>

```java
public DataCloudflareApiShieldDiscoveryOperationsResultFeatures getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference;

new DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests">requests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests"></a>

```java
public java.lang.Number getRequests();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue"></a>

```java
public DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultList <a name="DataCloudflareApiShieldDiscoveryOperationsResultList" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperationsResultList;

new DataCloudflareApiShieldDiscoveryOperationsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get"></a>

```java
public DataCloudflareApiShieldDiscoveryOperationsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareApiShieldDiscoveryOperationsResultOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_api_shield_discovery_operations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference;

new DataCloudflareApiShieldDiscoveryOperationsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features">features</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin">origin</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features"></a>

```java
public DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference getFeatures();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin"></a>

```java
public java.util.List<java.lang.String> getOrigin();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareApiShieldDiscoveryOperationsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a>

---




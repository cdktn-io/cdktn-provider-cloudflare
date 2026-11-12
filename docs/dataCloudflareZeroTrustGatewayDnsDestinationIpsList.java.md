# `dataCloudflareZeroTrustGatewayDnsDestinationIpsList` Submodule <a name="`dataCloudflareZeroTrustGatewayDnsDestinationIpsList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustGatewayDnsDestinationIpsList <a name="DataCloudflareZeroTrustGatewayDnsDestinationIpsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_dns_destination_ips_list cloudflare_zero_trust_gateway_dns_destination_ips_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_gateway_dns_destination_ips_list.DataCloudflareZeroTrustGatewayDnsDestinationIpsList;

DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Specify the Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Specify the Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_dns_destination_ips_list#account_id DataCloudflareZeroTrustGatewayDnsDestinationIpsList#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_dns_destination_ips_list#max_items DataCloudflareZeroTrustGatewayDnsDestinationIpsList#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustGatewayDnsDestinationIpsList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_gateway_dns_destination_ips_list.DataCloudflareZeroTrustGatewayDnsDestinationIpsList;

DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_gateway_dns_destination_ips_list.DataCloudflareZeroTrustGatewayDnsDestinationIpsList;

DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_gateway_dns_destination_ips_list.DataCloudflareZeroTrustGatewayDnsDestinationIpsList;

DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_gateway_dns_destination_ips_list.DataCloudflareZeroTrustGatewayDnsDestinationIpsList;

DataCloudflareZeroTrustGatewayDnsDestinationIpsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustGatewayDnsDestinationIpsList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustGatewayDnsDestinationIpsList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustGatewayDnsDestinationIpsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustGatewayDnsDestinationIpsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_dns_destination_ips_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustGatewayDnsDestinationIpsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList">DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.result"></a>

```java
public DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList">DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig <a name="DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_gateway_dns_destination_ips_list.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig;

DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Specify the Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Specify the Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_dns_destination_ips_list#account_id DataCloudflareZeroTrustGatewayDnsDestinationIpsList#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_gateway_dns_destination_ips_list#max_items DataCloudflareZeroTrustGatewayDnsDestinationIpsList#max_items}

---

### DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult <a name="DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_gateway_dns_destination_ips_list.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult;

DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList <a name="DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_gateway_dns_destination_ips_list.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList;

new DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.get"></a>

```java
public DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference <a name="DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_gateway_dns_destination_ips_list.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference;

new DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.backupIp">backupIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.pairType">pairType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.primaryIp">primaryIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult">DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupIp`<sup>Required</sup> <a name="backupIp" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.backupIp"></a>

```java
public java.lang.String getBackupIp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pairType`<sup>Required</sup> <a name="pairType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.pairType"></a>

```java
public java.lang.String getPairType();
```

- *Type:* java.lang.String

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.primaryIp"></a>

```java
public java.lang.String getPrimaryIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayDnsDestinationIpsList.DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult">DataCloudflareZeroTrustGatewayDnsDestinationIpsListResult</a>

---




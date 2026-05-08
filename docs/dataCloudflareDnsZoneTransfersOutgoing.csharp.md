# `dataCloudflareDnsZoneTransfersOutgoing` Submodule <a name="`dataCloudflareDnsZoneTransfersOutgoing` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsZoneTransfersOutgoing <a name="DataCloudflareDnsZoneTransfersOutgoing" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareDnsZoneTransfersOutgoing(Construct Scope, string Id, DataCloudflareDnsZoneTransfersOutgoingConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig">DataCloudflareDnsZoneTransfersOutgoingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig">DataCloudflareDnsZoneTransfersOutgoingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareDnsZoneTransfersOutgoing resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersOutgoing.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersOutgoing.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersOutgoing.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersOutgoing.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareDnsZoneTransfersOutgoing resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsZoneTransfersOutgoing to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsZoneTransfersOutgoing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/dns_zone_transfers_outgoing#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsZoneTransfersOutgoing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.checkedTime">CheckedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.lastTransferredTime">LastTransferredTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.peers">Peers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.soaSerial">SoaSerial</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CheckedTime`<sup>Required</sup> <a name="CheckedTime" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.checkedTime"></a>

```csharp
public string CheckedTime { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastTransferredTime`<sup>Required</sup> <a name="LastTransferredTime" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.lastTransferredTime"></a>

```csharp
public string LastTransferredTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.peers"></a>

```csharp
public string[] Peers { get; }
```

- *Type:* string[]

---

##### `SoaSerial`<sup>Required</sup> <a name="SoaSerial" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.soaSerial"></a>

```csharp
public double SoaSerial { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoing.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsZoneTransfersOutgoingConfig <a name="DataCloudflareDnsZoneTransfersOutgoingConfig" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareDnsZoneTransfersOutgoingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/dns_zone_transfers_outgoing#zone_id DataCloudflareDnsZoneTransfersOutgoing#zone_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersOutgoing.DataCloudflareDnsZoneTransfersOutgoingConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/dns_zone_transfers_outgoing#zone_id DataCloudflareDnsZoneTransfersOutgoing#zone_id}.

---




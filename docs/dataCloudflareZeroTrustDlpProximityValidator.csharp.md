# `dataCloudflareZeroTrustDlpProximityValidator` Submodule <a name="`dataCloudflareZeroTrustDlpProximityValidator` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpProximityValidator <a name="DataCloudflareZeroTrustDlpProximityValidator" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator cloudflare_zero_trust_dlp_proximity_validator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidator(Construct Scope, string Id, DataCloudflareZeroTrustDlpProximityValidatorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig">DataCloudflareZeroTrustDlpProximityValidatorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig">DataCloudflareZeroTrustDlpProximityValidatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDlpProximityValidator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDlpProximityValidator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDlpProximityValidator.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDlpProximityValidator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpProximityValidator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDlpProximityValidator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpProximityValidator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.referencedBy">ReferencedBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.words">Words</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList">DataCloudflareZeroTrustDlpProximityValidatorWordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorIdInput">ValidatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorId">ValidatorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReferencedBy`<sup>Required</sup> <a name="ReferencedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.referencedBy"></a>

```csharp
public DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference ReferencedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference">DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.words"></a>

```csharp
public DataCloudflareZeroTrustDlpProximityValidatorWordsList Words { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList">DataCloudflareZeroTrustDlpProximityValidatorWordsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ValidatorIdInput`<sup>Optional</sup> <a name="ValidatorIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorIdInput"></a>

```csharp
public string ValidatorIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ValidatorId`<sup>Required</sup> <a name="ValidatorId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.validatorId"></a>

```csharp
public string ValidatorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpProximityValidatorConfig <a name="DataCloudflareZeroTrustDlpProximityValidatorConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidatorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string ValidatorId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#account_id DataCloudflareZeroTrustDlpProximityValidator#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.validatorId">ValidatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#validator_id DataCloudflareZeroTrustDlpProximityValidator#validator_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#account_id DataCloudflareZeroTrustDlpProximityValidator#account_id}.

---

##### `ValidatorId`<sup>Required</sup> <a name="ValidatorId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorConfig.property.validatorId"></a>

```csharp
public string ValidatorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_dlp_proximity_validator#validator_id DataCloudflareZeroTrustDlpProximityValidator#validator_id}.

---

### DataCloudflareZeroTrustDlpProximityValidatorReferencedBy <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidatorReferencedBy {

};
```


### DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries {

};
```


### DataCloudflareZeroTrustDlpProximityValidatorWords <a name="DataCloudflareZeroTrustDlpProximityValidatorWords" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidatorWords {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.get"></a>

```csharp
private DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntries</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount">EntryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorReferencedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries"></a>

```csharp
public DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList">DataCloudflareZeroTrustDlpProximityValidatorReferencedByEntriesList</a>

---

##### `EntryCount`<sup>Required</sup> <a name="EntryCount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount"></a>

```csharp
public double EntryCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDlpProximityValidatorReferencedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorReferencedBy">DataCloudflareZeroTrustDlpProximityValidatorReferencedBy</a>

---


### DataCloudflareZeroTrustDlpProximityValidatorWordsList <a name="DataCloudflareZeroTrustDlpProximityValidatorWordsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidatorWordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.get"></a>

```csharp
private DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference <a name="DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.weight">Weight</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.word">Word</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords">DataCloudflareZeroTrustDlpProximityValidatorWords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.weight"></a>

```csharp
public string Weight { get; }
```

- *Type:* string

---

##### `Word`<sup>Required</sup> <a name="Word" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.word"></a>

```csharp
public string Word { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDlpProximityValidatorWords InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpProximityValidator.DataCloudflareZeroTrustDlpProximityValidatorWords">DataCloudflareZeroTrustDlpProximityValidatorWords</a>

---




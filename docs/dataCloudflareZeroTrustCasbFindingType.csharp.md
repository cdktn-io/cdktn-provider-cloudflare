# `dataCloudflareZeroTrustCasbFindingType` Submodule <a name="`dataCloudflareZeroTrustCasbFindingType` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbFindingType <a name="DataCloudflareZeroTrustCasbFindingType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbFindingType(Construct Scope, string Id, DataCloudflareZeroTrustCasbFindingTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig">DataCloudflareZeroTrustCasbFindingTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig">DataCloudflareZeroTrustCasbFindingTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFindingTypeId">ResetFindingTypeId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareZeroTrustCasbFindingTypeFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFindingTypeId` <a name="ResetFindingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFindingTypeId"></a>

```csharp
private void ResetFindingTypeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCasbFindingType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCasbFindingType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCasbFindingType.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCasbFindingType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCasbFindingType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCasbFindingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbFindingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.appliesToAllIntegrations">AppliesToAllIntegrations</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetClass">AssetClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetVendor">AssetVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.category">Category</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference">DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.integrationIds">IntegrationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.matchCount">MatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.quarantined">Quarantined</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.vendor">Vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeIdInput">FindingTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeId">FindingTypeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AppliesToAllIntegrations`<sup>Required</sup> <a name="AppliesToAllIntegrations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.appliesToAllIntegrations"></a>

```csharp
public IResolvable AppliesToAllIntegrations { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AssetClass`<sup>Required</sup> <a name="AssetClass" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetClass"></a>

```csharp
public string AssetClass { get; }
```

- *Type:* string

---

##### `AssetVendor`<sup>Required</sup> <a name="AssetVendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetVendor"></a>

```csharp
public string AssetVendor { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.category"></a>

```csharp
public DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference Category { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference">DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationIds`<sup>Required</sup> <a name="IntegrationIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.integrationIds"></a>

```csharp
public string[] IntegrationIds { get; }
```

- *Type:* string[]

---

##### `MatchCount`<sup>Required</sup> <a name="MatchCount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.matchCount"></a>

```csharp
public double MatchCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `Quarantined`<sup>Required</sup> <a name="Quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.quarantined"></a>

```csharp
public IResolvable Quarantined { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.vendor"></a>

```csharp
public string Vendor { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCasbFindingTypeFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---

##### `FindingTypeIdInput`<sup>Optional</sup> <a name="FindingTypeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeIdInput"></a>

```csharp
public string FindingTypeIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `FindingTypeId`<sup>Required</sup> <a name="FindingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeId"></a>

```csharp
public string FindingTypeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbFindingTypeCategory <a name="DataCloudflareZeroTrustCasbFindingTypeCategory" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbFindingTypeCategory {

};
```


### DataCloudflareZeroTrustCasbFindingTypeConfig <a name="DataCloudflareZeroTrustCasbFindingTypeConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbFindingTypeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    DataCloudflareZeroTrustCasbFindingTypeFilter Filter = null,
    string FindingTypeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.findingTypeId">FindingTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCasbFindingTypeFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}.

---

##### `FindingTypeId`<sup>Optional</sup> <a name="FindingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.findingTypeId"></a>

```csharp
public string FindingTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}.

---

### DataCloudflareZeroTrustCasbFindingTypeFilter <a name="DataCloudflareZeroTrustCasbFindingTypeFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbFindingTypeFilter {
    string Direction = null,
    string MaxUpdatedAt = null,
    string MinUpdatedAt = null,
    string Order = null,
    string[] Origins = null,
    bool|IResolvable Quarantined = null,
    string Search = null,
    string[] Severities = null,
    string[] Types = null,
    string[] Vendors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.direction">Direction</a></code> | <code>string</code> | Sort direction for the primary field. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.maxUpdatedAt">MaxUpdatedAt</a></code> | <code>string</code> | Return only finding types updated at or before this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.minUpdatedAt">MinUpdatedAt</a></code> | <code>string</code> | Return only finding types updated at or after this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.order">Order</a></code> | <code>string</code> | Field to sort by (case-insensitive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.origins">Origins</a></code> | <code>string[]</code> | Filter finding types by origin. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.quarantined">Quarantined</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.search">Search</a></code> | <code>string</code> | Filter finding types by name or ID (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.severities">Severities</a></code> | <code>string[]</code> | Filter finding types by severity. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.types">Types</a></code> | <code>string[]</code> | Filter finding types by category type. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.vendors">Vendors</a></code> | <code>string[]</code> | Filter finding types by vendor. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Sort direction for the primary field.

Defaults to 'desc'.
Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#direction DataCloudflareZeroTrustCasbFindingType#direction}

---

##### `MaxUpdatedAt`<sup>Optional</sup> <a name="MaxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.maxUpdatedAt"></a>

```csharp
public string MaxUpdatedAt { get; set; }
```

- *Type:* string

Return only finding types updated at or before this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#max_updated_at DataCloudflareZeroTrustCasbFindingType#max_updated_at}

---

##### `MinUpdatedAt`<sup>Optional</sup> <a name="MinUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.minUpdatedAt"></a>

```csharp
public string MinUpdatedAt { get; set; }
```

- *Type:* string

Return only finding types updated at or after this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#min_updated_at DataCloudflareZeroTrustCasbFindingType#min_updated_at}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to sort by (case-insensitive).

Defaults to 'created'.
Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
Ascending order: type Content then Posture; origin custom then system;
severity Low, Medium, High, Critical.
Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#order DataCloudflareZeroTrustCasbFindingType#order}

---

##### `Origins`<sup>Optional</sup> <a name="Origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.origins"></a>

```csharp
public string[] Origins { get; set; }
```

- *Type:* string[]

Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#origins DataCloudflareZeroTrustCasbFindingType#origins}

---

##### `Quarantined`<sup>Optional</sup> <a name="Quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.quarantined"></a>

```csharp
public bool|IResolvable Quarantined { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#quarantined DataCloudflareZeroTrustCasbFindingType#quarantined}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Filter finding types by name or ID (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#search DataCloudflareZeroTrustCasbFindingType#search}

---

##### `Severities`<sup>Optional</sup> <a name="Severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.severities"></a>

```csharp
public string[] Severities { get; set; }
```

- *Type:* string[]

Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#severities DataCloudflareZeroTrustCasbFindingType#severities}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#types DataCloudflareZeroTrustCasbFindingType#types}

---

##### `Vendors`<sup>Optional</sup> <a name="Vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.vendors"></a>

```csharp
public string[] Vendors { get; set; }
```

- *Type:* string[]

Filter finding types by vendor.

Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#vendors DataCloudflareZeroTrustCasbFindingType#vendors}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.observation">Observation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory">DataCloudflareZeroTrustCasbFindingTypeCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Observation`<sup>Required</sup> <a name="Observation" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.observation"></a>

```csharp
public string Observation { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustCasbFindingTypeCategory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory">DataCloudflareZeroTrustCasbFindingTypeCategory</a>

---


### DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMaxUpdatedAt">ResetMaxUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMinUpdatedAt">ResetMinUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrigins">ResetOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetQuarantined">ResetQuarantined</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSeverities">ResetSeverities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetVendors">ResetVendors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetMaxUpdatedAt` <a name="ResetMaxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMaxUpdatedAt"></a>

```csharp
private void ResetMaxUpdatedAt()
```

##### `ResetMinUpdatedAt` <a name="ResetMinUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMinUpdatedAt"></a>

```csharp
private void ResetMinUpdatedAt()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetOrigins` <a name="ResetOrigins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrigins"></a>

```csharp
private void ResetOrigins()
```

##### `ResetQuarantined` <a name="ResetQuarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetQuarantined"></a>

```csharp
private void ResetQuarantined()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetSeverities` <a name="ResetSeverities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSeverities"></a>

```csharp
private void ResetSeverities()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetTypes"></a>

```csharp
private void ResetTypes()
```

##### `ResetVendors` <a name="ResetVendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetVendors"></a>

```csharp
private void ResetVendors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAtInput">MaxUpdatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAtInput">MinUpdatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.originsInput">OriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantinedInput">QuarantinedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severitiesInput">SeveritiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendorsInput">VendorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAt">MaxUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAt">MinUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.origins">Origins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantined">Quarantined</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severities">Severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendors">Vendors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `MaxUpdatedAtInput`<sup>Optional</sup> <a name="MaxUpdatedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAtInput"></a>

```csharp
public string MaxUpdatedAtInput { get; }
```

- *Type:* string

---

##### `MinUpdatedAtInput`<sup>Optional</sup> <a name="MinUpdatedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAtInput"></a>

```csharp
public string MinUpdatedAtInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `OriginsInput`<sup>Optional</sup> <a name="OriginsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.originsInput"></a>

```csharp
public string[] OriginsInput { get; }
```

- *Type:* string[]

---

##### `QuarantinedInput`<sup>Optional</sup> <a name="QuarantinedInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantinedInput"></a>

```csharp
public bool|IResolvable QuarantinedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severitiesInput"></a>

```csharp
public string[] SeveritiesInput { get; }
```

- *Type:* string[]

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `VendorsInput`<sup>Optional</sup> <a name="VendorsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendorsInput"></a>

```csharp
public string[] VendorsInput { get; }
```

- *Type:* string[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `MaxUpdatedAt`<sup>Required</sup> <a name="MaxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAt"></a>

```csharp
public string MaxUpdatedAt { get; }
```

- *Type:* string

---

##### `MinUpdatedAt`<sup>Required</sup> <a name="MinUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAt"></a>

```csharp
public string MinUpdatedAt { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.origins"></a>

```csharp
public string[] Origins { get; }
```

- *Type:* string[]

---

##### `Quarantined`<sup>Required</sup> <a name="Quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantined"></a>

```csharp
public bool|IResolvable Quarantined { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severities"></a>

```csharp
public string[] Severities { get; }
```

- *Type:* string[]

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `Vendors`<sup>Required</sup> <a name="Vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendors"></a>

```csharp
public string[] Vendors { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCasbFindingTypeFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---




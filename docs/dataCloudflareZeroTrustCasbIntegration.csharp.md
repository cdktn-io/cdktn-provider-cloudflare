# `dataCloudflareZeroTrustCasbIntegration` Submodule <a name="`dataCloudflareZeroTrustCasbIntegration` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbIntegration <a name="DataCloudflareZeroTrustCasbIntegration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration cloudflare_zero_trust_casb_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbIntegration(Construct Scope, string Id, DataCloudflareZeroTrustCasbIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig">DataCloudflareZeroTrustCasbIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig">DataCloudflareZeroTrustCasbIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareZeroTrustCasbIntegrationFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCasbIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCasbIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCasbIntegration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCasbIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbIntegration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCasbIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCasbIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.application">Application</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.authMethod">AuthMethod</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.authorizationLink">AuthorizationLink</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference">DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.credentialsExpiry">CredentialsExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.dlpProfiles">DlpProfiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference">DataCloudflareZeroTrustCasbIntegrationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.healthDetails">HealthDetails</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.isPaused">IsPaused</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.lastHydrated">LastHydrated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.useCases">UseCases</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.application"></a>

```csharp
public StringMap Application { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.authMethod"></a>

```csharp
public StringMap AuthMethod { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AuthorizationLink`<sup>Required</sup> <a name="AuthorizationLink" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.authorizationLink"></a>

```csharp
public DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference AuthorizationLink { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference">DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `CredentialsExpiry`<sup>Required</sup> <a name="CredentialsExpiry" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.credentialsExpiry"></a>

```csharp
public string CredentialsExpiry { get; }
```

- *Type:* string

---

##### `DlpProfiles`<sup>Required</sup> <a name="DlpProfiles" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.dlpProfiles"></a>

```csharp
public string[] DlpProfiles { get; }
```

- *Type:* string[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCasbIntegrationFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference">DataCloudflareZeroTrustCasbIntegrationFilterOutputReference</a>

---

##### `HealthDetails`<sup>Required</sup> <a name="HealthDetails" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.healthDetails"></a>

```csharp
public StringMapList HealthDetails { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `IsPaused`<sup>Required</sup> <a name="IsPaused" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.isPaused"></a>

```csharp
public IResolvable IsPaused { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastHydrated`<sup>Required</sup> <a name="LastHydrated" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.lastHydrated"></a>

```csharp
public string LastHydrated { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.useCases"></a>

```csharp
public StringMapList UseCases { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCasbIntegrationFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbIntegrationAuthorizationLink <a name="DataCloudflareZeroTrustCasbIntegrationAuthorizationLink" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbIntegrationAuthorizationLink {

};
```


### DataCloudflareZeroTrustCasbIntegrationConfig <a name="DataCloudflareZeroTrustCasbIntegrationConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbIntegrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    DataCloudflareZeroTrustCasbIntegrationFilter Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#account_id DataCloudflareZeroTrustCasbIntegration#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#filter DataCloudflareZeroTrustCasbIntegration#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Integration ID to look up. Exactly one of `id` or `filter` must be configured. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#account_id DataCloudflareZeroTrustCasbIntegration#account_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCasbIntegrationFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#filter DataCloudflareZeroTrustCasbIntegration#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Integration ID to look up. Exactly one of `id` or `filter` must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#id DataCloudflareZeroTrustCasbIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareZeroTrustCasbIntegrationFilter <a name="DataCloudflareZeroTrustCasbIntegrationFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbIntegrationFilter {
    string Application = null,
    string Direction = null,
    bool|IResolvable DlpEnabled = null,
    string Order = null,
    double Page = null,
    double PageSize = null,
    string Search = null,
    string Status = null,
    string UseCases = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.application">Application</a></code> | <code>string</code> | Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.direction">Direction</a></code> | <code>string</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.dlpEnabled">DlpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter by DLP enabled status (true/false). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.order">Order</a></code> | <code>string</code> | Field to order results by. Available values: "application", "created", "name", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.page">Page</a></code> | <code>double</code> | Page number within the paginated result set. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.pageSize">PageSize</a></code> | <code>double</code> | Number of results per page. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.search">Search</a></code> | <code>string</code> | Search integrations by name or application. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.status">Status</a></code> | <code>string</code> | Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.useCases">UseCases</a></code> | <code>string</code> | Filter by one enabled use case (for example, casb or ces). |

---

##### `Application`<sup>Optional</sup> <a name="Application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.application"></a>

```csharp
public string Application { get; set; }
```

- *Type:* string

Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#application DataCloudflareZeroTrustCasbIntegration#application}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#direction DataCloudflareZeroTrustCasbIntegration#direction}

---

##### `DlpEnabled`<sup>Optional</sup> <a name="DlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.dlpEnabled"></a>

```csharp
public bool|IResolvable DlpEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter by DLP enabled status (true/false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#dlp_enabled DataCloudflareZeroTrustCasbIntegration#dlp_enabled}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order results by. Available values: "application", "created", "name", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#order DataCloudflareZeroTrustCasbIntegration#order}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.page"></a>

```csharp
public double Page { get; set; }
```

- *Type:* double

Page number within the paginated result set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#page DataCloudflareZeroTrustCasbIntegration#page}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#page_size DataCloudflareZeroTrustCasbIntegration#page_size}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search integrations by name or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#search DataCloudflareZeroTrustCasbIntegration#search}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#status DataCloudflareZeroTrustCasbIntegration#status}

---

##### `UseCases`<sup>Optional</sup> <a name="UseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter.property.useCases"></a>

```csharp
public string UseCases { get; set; }
```

- *Type:* string

Filter by one enabled use case (for example, casb or ces).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integration#use_cases DataCloudflareZeroTrustCasbIntegration#use_cases}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference <a name="DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.components">Components</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLink">DataCloudflareZeroTrustCasbIntegrationAuthorizationLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.components"></a>

```csharp
public StringMap Components { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLinkOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustCasbIntegrationAuthorizationLink InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationAuthorizationLink">DataCloudflareZeroTrustCasbIntegrationAuthorizationLink</a>

---


### DataCloudflareZeroTrustCasbIntegrationFilterOutputReference <a name="DataCloudflareZeroTrustCasbIntegrationFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCasbIntegrationFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetApplication">ResetApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetDlpEnabled">ResetDlpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetUseCases">ResetUseCases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplication` <a name="ResetApplication" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetApplication"></a>

```csharp
private void ResetApplication()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetDlpEnabled` <a name="ResetDlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetDlpEnabled"></a>

```csharp
private void ResetDlpEnabled()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetPage` <a name="ResetPage" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetPage"></a>

```csharp
private void ResetPage()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUseCases` <a name="ResetUseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.resetUseCases"></a>

```csharp
private void ResetUseCases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.applicationInput">ApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.dlpEnabledInput">DlpEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageInput">PageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.useCasesInput">UseCasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.dlpEnabled">DlpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.page">Page</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.useCases">UseCases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.applicationInput"></a>

```csharp
public string ApplicationInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DlpEnabledInput`<sup>Optional</sup> <a name="DlpEnabledInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.dlpEnabledInput"></a>

```csharp
public bool|IResolvable DlpEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageInput"></a>

```csharp
public double PageInput { get; }
```

- *Type:* double

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UseCasesInput`<sup>Optional</sup> <a name="UseCasesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.useCasesInput"></a>

```csharp
public string UseCasesInput { get; }
```

- *Type:* string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `DlpEnabled`<sup>Required</sup> <a name="DlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.dlpEnabled"></a>

```csharp
public bool|IResolvable DlpEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.page"></a>

```csharp
public double Page { get; }
```

- *Type:* double

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.useCases"></a>

```csharp
public string UseCases { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCasbIntegrationFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegration.DataCloudflareZeroTrustCasbIntegrationFilter">DataCloudflareZeroTrustCasbIntegrationFilter</a>

---




# `dataCloudflareZeroTrustResourceLibraryApplication` Submodule <a name="`dataCloudflareZeroTrustResourceLibraryApplication` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustResourceLibraryApplication <a name="DataCloudflareZeroTrustResourceLibraryApplication" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustResourceLibraryApplication(Construct Scope, string Id, DataCloudflareZeroTrustResourceLibraryApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig">DataCloudflareZeroTrustResourceLibraryApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig">DataCloudflareZeroTrustResourceLibraryApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareZeroTrustResourceLibraryApplicationFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustResourceLibraryApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustResourceLibraryApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustResourceLibraryApplication.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustResourceLibraryApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustResourceLibraryApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustResourceLibraryApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustResourceLibraryApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationConfidenceScore">ApplicationConfidenceScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationScoreComposition">ApplicationScoreComposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationSource">ApplicationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationTypeDescription">ApplicationTypeDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.categoryId">CategoryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference">DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.genAiScore">GenAiScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.hostnames">Hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.humanId">HumanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.ipSubnets">IpSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.portProtocols">PortProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.supportDomains">SupportDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.supported">Supported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.idInput">IdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.id">Id</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationConfidenceScore`<sup>Required</sup> <a name="ApplicationConfidenceScore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationConfidenceScore"></a>

```csharp
public double ApplicationConfidenceScore { get; }
```

- *Type:* double

---

##### `ApplicationScoreComposition`<sup>Required</sup> <a name="ApplicationScoreComposition" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationScoreComposition"></a>

```csharp
public string ApplicationScoreComposition { get; }
```

- *Type:* string

---

##### `ApplicationSource`<sup>Required</sup> <a name="ApplicationSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationSource"></a>

```csharp
public string ApplicationSource { get; }
```

- *Type:* string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `ApplicationTypeDescription`<sup>Required</sup> <a name="ApplicationTypeDescription" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.applicationTypeDescription"></a>

```csharp
public string ApplicationTypeDescription { get; }
```

- *Type:* string

---

##### `CategoryId`<sup>Required</sup> <a name="CategoryId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.categoryId"></a>

```csharp
public double CategoryId { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.filter"></a>

```csharp
public DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference">DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference</a>

---

##### `GenAiScore`<sup>Required</sup> <a name="GenAiScore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.genAiScore"></a>

```csharp
public double GenAiScore { get; }
```

- *Type:* double

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.hostnames"></a>

```csharp
public string[] Hostnames { get; }
```

- *Type:* string[]

---

##### `HumanId`<sup>Required</sup> <a name="HumanId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.humanId"></a>

```csharp
public string HumanId { get; }
```

- *Type:* string

---

##### `IpSubnets`<sup>Required</sup> <a name="IpSubnets" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.ipSubnets"></a>

```csharp
public string[] IpSubnets { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortProtocols`<sup>Required</sup> <a name="PortProtocols" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.portProtocols"></a>

```csharp
public string[] PortProtocols { get; }
```

- *Type:* string[]

---

##### `SupportDomains`<sup>Required</sup> <a name="SupportDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.supportDomains"></a>

```csharp
public string[] SupportDomains { get; }
```

- *Type:* string[]

---

##### `Supported`<sup>Required</sup> <a name="Supported" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.supported"></a>

```csharp
public string[] Supported { get; }
```

- *Type:* string[]

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustResourceLibraryApplicationFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.idInput"></a>

```csharp
public double IdInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustResourceLibraryApplicationConfig <a name="DataCloudflareZeroTrustResourceLibraryApplicationConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustResourceLibraryApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    DataCloudflareZeroTrustResourceLibraryApplicationFilter Filter = null,
    double Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#account_id DataCloudflareZeroTrustResourceLibraryApplication#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#filter DataCloudflareZeroTrustResourceLibraryApplication#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.id">Id</a></code> | <code>double</code> | Returns the application ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#account_id DataCloudflareZeroTrustResourceLibraryApplication#account_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.filter"></a>

```csharp
public DataCloudflareZeroTrustResourceLibraryApplicationFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#filter DataCloudflareZeroTrustResourceLibraryApplication#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationConfig.property.id"></a>

```csharp
public double Id { get; set; }
```

- *Type:* double

Returns the application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#id DataCloudflareZeroTrustResourceLibraryApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareZeroTrustResourceLibraryApplicationFilter <a name="DataCloudflareZeroTrustResourceLibraryApplicationFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustResourceLibraryApplicationFilter {
    string Fields = null,
    string Filter = null,
    double Limit = null,
    double Offset = null,
    string OrderBy = null,
    string Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.fields">Fields</a></code> | <code>string</code> | Return only the listed properties on each application, as a comma-separated list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.filter">Filter</a></code> | <code>string</code> | Filter applications using key:value format. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.limit">Limit</a></code> | <code>double</code> | Limit of number of results to return (max 250). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.offset">Offset</a></code> | <code>double</code> | Offset of results to return. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.orderBy">OrderBy</a></code> | <code>string</code> | Order results using field:direction format. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.search">Search</a></code> | <code>string</code> | Fuzzy search across application name and hostnames. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.fields"></a>

```csharp
public string Fields { get; set; }
```

- *Type:* string

Return only the listed properties on each application, as a comma-separated list.

Use this to keep responses small when you only need part of each application — for
example populating a picker with `fields=id,name` instead of downloading every
hostname and IP subnet.

Omit this parameter to receive the full application object.

`id` is always returned.

Selectable properties: `id`, `name`, `human_id`, `version`, `hostnames`,
`support_domains`, `ip_subnets`, `port_protocols`, `supported`, `gen_ai_score`,
`application_confidence_score`, `created_at`, `updated_at`, `review_status`.

Unknown or empty property names return `400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#fields DataCloudflareZeroTrustResourceLibraryApplication#fields}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Filter applications using key:value format.

Supported filter keys:

* name: Filter by application name (e.g., name:HR)
* id: Filter by application ID (e.g., id:498)
* human_id: Filter by human-readable ID (e.g., human_id:HR)
* hostname: Filter by hostname or support domain (e.g., hostname:portal.example.com)
* source: Filter by application source name (e.g., source:cloudflare)
* ip_subnet: Filter by IP subnet using CIDR containment — returns applications where any stored subnet contains the search value (e.g., ip_subnet:10.0.1.5/32 matches apps with 10.0.0.0/16)
* category_id: Filter by category ID (e.g., category_id:12).
* category_name: Filter by category name (e.g., category_name:HR).
* supported: Filter by supported Cloudflare product (e.g., supported:ACCESS). Values: GATEWAY, ACCESS, CASB.
* review_status: Filter by the account's Gateway review status. Values: approved, unapproved, in_review, unreviewed.
  .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#filter DataCloudflareZeroTrustResourceLibraryApplication#filter}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Limit of number of results to return (max 250).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#limit DataCloudflareZeroTrustResourceLibraryApplication#limit}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.offset"></a>

```csharp
public double Offset { get; set; }
```

- *Type:* double

Offset of results to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#offset DataCloudflareZeroTrustResourceLibraryApplication#offset}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

Order results using field:direction format.

Supported fields are name, id, human_id,
category_id, application_type, application_confidence_score, and gen_ai_score.
Supported directions are asc and desc. Ignored when search is provided; results are
ranked by relevance instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#order_by DataCloudflareZeroTrustResourceLibraryApplication#order_by}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Fuzzy search across application name and hostnames.

Results are ranked by relevance. Must be between 2 and 200 characters. Can be combined with filter parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/zero_trust_resource_library_application#search DataCloudflareZeroTrustResourceLibraryApplication#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference <a name="DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetOffset"></a>

```csharp
private void ResetOffset()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetOrderBy"></a>

```csharp
private void ResetOrderBy()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.offsetInput">OffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fields">Fields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.offset">Offset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fieldsInput"></a>

```csharp
public string FieldsInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.offsetInput"></a>

```csharp
public double OffsetInput { get; }
```

- *Type:* double

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.fields"></a>

```csharp
public string Fields { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.offset"></a>

```csharp
public double Offset { get; }
```

- *Type:* double

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustResourceLibraryApplicationFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplication.DataCloudflareZeroTrustResourceLibraryApplicationFilter">DataCloudflareZeroTrustResourceLibraryApplicationFilter</a>

---




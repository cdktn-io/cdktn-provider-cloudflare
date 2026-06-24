# `dataCloudflarePageShieldScripts` Submodule <a name="`dataCloudflarePageShieldScripts` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldScripts <a name="DataCloudflarePageShieldScripts" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflarePageShieldScripts(Construct Scope, string Id, DataCloudflarePageShieldScriptsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig">DataCloudflarePageShieldScriptsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig">DataCloudflarePageShieldScriptsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflarePageShieldScripts resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflarePageShieldScripts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflarePageShieldScripts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflarePageShieldScripts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflarePageShieldScripts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflarePageShieldScripts resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePageShieldScripts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePageShieldScripts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/page_shield_scripts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldScripts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.addedAt">AddedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cryptominingScore">CryptominingScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dataflowScore">DataflowScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.domainReportedMalicious">DomainReportedMalicious</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fetchedAt">FetchedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstPageUrl">FirstPageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstSeenAt">FirstSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.hash">Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.jsIntegrityScore">JsIntegrityScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lastSeenAt">LastSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.magecartScore">MagecartScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousDomainCategories">MaliciousDomainCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousUrlCategories">MaliciousUrlCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.malwareScore">MalwareScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.obfuscationScore">ObfuscationScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.pageUrls">PageUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlContainsCdnCgiPath">UrlContainsCdnCgiPath</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlReportedMalicious">UrlReportedMalicious</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.versions">Versions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList">DataCloudflarePageShieldScriptsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptIdInput">ScriptIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptId">ScriptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.addedAt"></a>

```csharp
public string AddedAt { get; }
```

- *Type:* string

---

##### `CryptominingScore`<sup>Required</sup> <a name="CryptominingScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.cryptominingScore"></a>

```csharp
public double CryptominingScore { get; }
```

- *Type:* double

---

##### `DataflowScore`<sup>Required</sup> <a name="DataflowScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.dataflowScore"></a>

```csharp
public double DataflowScore { get; }
```

- *Type:* double

---

##### `DomainReportedMalicious`<sup>Required</sup> <a name="DomainReportedMalicious" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.domainReportedMalicious"></a>

```csharp
public IResolvable DomainReportedMalicious { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FetchedAt`<sup>Required</sup> <a name="FetchedAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.fetchedAt"></a>

```csharp
public string FetchedAt { get; }
```

- *Type:* string

---

##### `FirstPageUrl`<sup>Required</sup> <a name="FirstPageUrl" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstPageUrl"></a>

```csharp
public string FirstPageUrl { get; }
```

- *Type:* string

---

##### `FirstSeenAt`<sup>Required</sup> <a name="FirstSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.firstSeenAt"></a>

```csharp
public string FirstSeenAt { get; }
```

- *Type:* string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.hash"></a>

```csharp
public string Hash { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JsIntegrityScore`<sup>Required</sup> <a name="JsIntegrityScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.jsIntegrityScore"></a>

```csharp
public double JsIntegrityScore { get; }
```

- *Type:* double

---

##### `LastSeenAt`<sup>Required</sup> <a name="LastSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.lastSeenAt"></a>

```csharp
public string LastSeenAt { get; }
```

- *Type:* string

---

##### `MagecartScore`<sup>Required</sup> <a name="MagecartScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.magecartScore"></a>

```csharp
public double MagecartScore { get; }
```

- *Type:* double

---

##### `MaliciousDomainCategories`<sup>Required</sup> <a name="MaliciousDomainCategories" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousDomainCategories"></a>

```csharp
public string[] MaliciousDomainCategories { get; }
```

- *Type:* string[]

---

##### `MaliciousUrlCategories`<sup>Required</sup> <a name="MaliciousUrlCategories" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.maliciousUrlCategories"></a>

```csharp
public string[] MaliciousUrlCategories { get; }
```

- *Type:* string[]

---

##### `MalwareScore`<sup>Required</sup> <a name="MalwareScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.malwareScore"></a>

```csharp
public double MalwareScore { get; }
```

- *Type:* double

---

##### `ObfuscationScore`<sup>Required</sup> <a name="ObfuscationScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.obfuscationScore"></a>

```csharp
public double ObfuscationScore { get; }
```

- *Type:* double

---

##### `PageUrls`<sup>Required</sup> <a name="PageUrls" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.pageUrls"></a>

```csharp
public string[] PageUrls { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlContainsCdnCgiPath`<sup>Required</sup> <a name="UrlContainsCdnCgiPath" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlContainsCdnCgiPath"></a>

```csharp
public IResolvable UrlContainsCdnCgiPath { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UrlReportedMalicious`<sup>Required</sup> <a name="UrlReportedMalicious" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.urlReportedMalicious"></a>

```csharp
public IResolvable UrlReportedMalicious { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.versions"></a>

```csharp
public DataCloudflarePageShieldScriptsVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList">DataCloudflarePageShieldScriptsVersionsList</a>

---

##### `ScriptIdInput`<sup>Optional</sup> <a name="ScriptIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptIdInput"></a>

```csharp
public string ScriptIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.scriptId"></a>

```csharp
public string ScriptId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScripts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldScriptsConfig <a name="DataCloudflarePageShieldScriptsConfig" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflarePageShieldScriptsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ScriptId,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.scriptId">ScriptId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.scriptId"></a>

```csharp
public string ScriptId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/page_shield_scripts#script_id DataCloudflarePageShieldScripts#script_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/page_shield_scripts#zone_id DataCloudflarePageShieldScripts#zone_id}

---

### DataCloudflarePageShieldScriptsVersions <a name="DataCloudflarePageShieldScriptsVersions" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflarePageShieldScriptsVersions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldScriptsVersionsList <a name="DataCloudflarePageShieldScriptsVersionsList" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflarePageShieldScriptsVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.get"></a>

```csharp
private DataCloudflarePageShieldScriptsVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflarePageShieldScriptsVersionsOutputReference <a name="DataCloudflarePageShieldScriptsVersionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflarePageShieldScriptsVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.cryptominingScore">CryptominingScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.dataflowScore">DataflowScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fetchedAt">FetchedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.hash">Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.jsIntegrityScore">JsIntegrityScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.magecartScore">MagecartScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.malwareScore">MalwareScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.obfuscationScore">ObfuscationScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions">DataCloudflarePageShieldScriptsVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CryptominingScore`<sup>Required</sup> <a name="CryptominingScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.cryptominingScore"></a>

```csharp
public double CryptominingScore { get; }
```

- *Type:* double

---

##### `DataflowScore`<sup>Required</sup> <a name="DataflowScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.dataflowScore"></a>

```csharp
public double DataflowScore { get; }
```

- *Type:* double

---

##### `FetchedAt`<sup>Required</sup> <a name="FetchedAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.fetchedAt"></a>

```csharp
public string FetchedAt { get; }
```

- *Type:* string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.hash"></a>

```csharp
public string Hash { get; }
```

- *Type:* string

---

##### `JsIntegrityScore`<sup>Required</sup> <a name="JsIntegrityScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.jsIntegrityScore"></a>

```csharp
public double JsIntegrityScore { get; }
```

- *Type:* double

---

##### `MagecartScore`<sup>Required</sup> <a name="MagecartScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.magecartScore"></a>

```csharp
public double MagecartScore { get; }
```

- *Type:* double

---

##### `MalwareScore`<sup>Required</sup> <a name="MalwareScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.malwareScore"></a>

```csharp
public double MalwareScore { get; }
```

- *Type:* double

---

##### `ObfuscationScore`<sup>Required</sup> <a name="ObfuscationScore" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.obfuscationScore"></a>

```csharp
public double ObfuscationScore { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePageShieldScriptsVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldScripts.DataCloudflarePageShieldScriptsVersions">DataCloudflarePageShieldScriptsVersions</a>

---




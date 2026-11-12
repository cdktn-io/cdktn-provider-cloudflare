# `dataCloudflareAiSecurityCustomTopics` Submodule <a name="`dataCloudflareAiSecurityCustomTopics` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAiSecurityCustomTopics <a name="DataCloudflareAiSecurityCustomTopics" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/ai_security_custom_topics cloudflare_ai_security_custom_topics}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSecurityCustomTopics(Construct Scope, string Id, DataCloudflareAiSecurityCustomTopicsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig">DataCloudflareAiSecurityCustomTopicsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig">DataCloudflareAiSecurityCustomTopicsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAiSecurityCustomTopics resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiSecurityCustomTopics.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiSecurityCustomTopics.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiSecurityCustomTopics.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAiSecurityCustomTopics.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareAiSecurityCustomTopics resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAiSecurityCustomTopics to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAiSecurityCustomTopics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/ai_security_custom_topics#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAiSecurityCustomTopics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.topics">Topics</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList">DataCloudflareAiSecurityCustomTopicsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.topics"></a>

```csharp
public DataCloudflareAiSecurityCustomTopicsTopicsList Topics { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList">DataCloudflareAiSecurityCustomTopicsTopicsList</a>

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopics.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAiSecurityCustomTopicsConfig <a name="DataCloudflareAiSecurityCustomTopicsConfig" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSecurityCustomTopicsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ZoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Defines the zone. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Defines the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/ai_security_custom_topics#zone_id DataCloudflareAiSecurityCustomTopics#zone_id}

---

### DataCloudflareAiSecurityCustomTopicsTopics <a name="DataCloudflareAiSecurityCustomTopicsTopics" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSecurityCustomTopicsTopics {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAiSecurityCustomTopicsTopicsList <a name="DataCloudflareAiSecurityCustomTopicsTopicsList" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSecurityCustomTopicsTopicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.get"></a>

```csharp
private DataCloudflareAiSecurityCustomTopicsTopicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareAiSecurityCustomTopicsTopicsOutputReference <a name="DataCloudflareAiSecurityCustomTopicsTopicsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAiSecurityCustomTopicsTopicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopics">DataCloudflareAiSecurityCustomTopicsTopics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopicsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAiSecurityCustomTopicsTopics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAiSecurityCustomTopics.DataCloudflareAiSecurityCustomTopicsTopics">DataCloudflareAiSecurityCustomTopicsTopics</a>

---




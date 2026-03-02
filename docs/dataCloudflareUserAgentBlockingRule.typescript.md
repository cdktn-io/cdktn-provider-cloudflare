# `dataCloudflareUserAgentBlockingRule` Submodule <a name="`dataCloudflareUserAgentBlockingRule` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareUserAgentBlockingRule <a name="DataCloudflareUserAgentBlockingRule" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

new dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule(scope: Construct, id: string, config: DataCloudflareUserAgentBlockingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig">DataCloudflareUserAgentBlockingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig">DataCloudflareUserAgentBlockingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetUaRuleId">resetUaRuleId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareUserAgentBlockingRuleFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetUaRuleId` <a name="resetUaRuleId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.resetUaRuleId"></a>

```typescript
public resetUaRuleId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareUserAgentBlockingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareUserAgentBlockingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareUserAgentBlockingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareUserAgentBlockingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/user_agent_blocking_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareUserAgentBlockingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference">DataCloudflareUserAgentBlockingRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference">DataCloudflareUserAgentBlockingRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.paused">paused</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleIdInput">uaRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleId">uaRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.configuration"></a>

```typescript
public readonly configuration: DataCloudflareUserAgentBlockingRuleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference">DataCloudflareUserAgentBlockingRuleConfigurationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filter"></a>

```typescript
public readonly filter: DataCloudflareUserAgentBlockingRuleFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference">DataCloudflareUserAgentBlockingRuleFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.paused"></a>

```typescript
public readonly paused: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareUserAgentBlockingRuleFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

---

##### `uaRuleIdInput`<sup>Optional</sup> <a name="uaRuleIdInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleIdInput"></a>

```typescript
public readonly uaRuleIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `uaRuleId`<sup>Required</sup> <a name="uaRuleId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.uaRuleId"></a>

```typescript
public readonly uaRuleId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareUserAgentBlockingRuleConfig <a name="DataCloudflareUserAgentBlockingRuleConfig" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

const dataCloudflareUserAgentBlockingRuleConfig: dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Defines an identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/user_agent_blocking_rule#filter DataCloudflareUserAgentBlockingRule#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.uaRuleId">uaRuleId</a></code> | <code>string</code> | The unique identifier of the User Agent Blocking rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/user_agent_blocking_rule#zone_id DataCloudflareUserAgentBlockingRule#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareUserAgentBlockingRuleFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/user_agent_blocking_rule#filter DataCloudflareUserAgentBlockingRule#filter}.

---

##### `uaRuleId`<sup>Optional</sup> <a name="uaRuleId" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfig.property.uaRuleId"></a>

```typescript
public readonly uaRuleId: string;
```

- *Type:* string

The unique identifier of the User Agent Blocking rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/user_agent_blocking_rule#ua_rule_id DataCloudflareUserAgentBlockingRule#ua_rule_id}

---

### DataCloudflareUserAgentBlockingRuleConfiguration <a name="DataCloudflareUserAgentBlockingRuleConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

const dataCloudflareUserAgentBlockingRuleConfiguration: dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration = { ... }
```


### DataCloudflareUserAgentBlockingRuleFilter <a name="DataCloudflareUserAgentBlockingRuleFilter" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

const dataCloudflareUserAgentBlockingRuleFilter: dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.description">description</a></code> | <code>string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.paused">paused</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, indicates that the rule is currently paused. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.userAgent">userAgent</a></code> | <code>string</code> | A string to search for in the user agent values of existing rules. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/user_agent_blocking_rule#description DataCloudflareUserAgentBlockingRule#description}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, indicates that the rule is currently paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/user_agent_blocking_rule#paused DataCloudflareUserAgentBlockingRule#paused}

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter.property.userAgent"></a>

```typescript
public readonly userAgent: string;
```

- *Type:* string

A string to search for in the user agent values of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/user_agent_blocking_rule#user_agent DataCloudflareUserAgentBlockingRule#user_agent}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareUserAgentBlockingRuleConfigurationOutputReference <a name="DataCloudflareUserAgentBlockingRuleConfigurationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

new dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration">DataCloudflareUserAgentBlockingRuleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareUserAgentBlockingRuleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleConfiguration">DataCloudflareUserAgentBlockingRuleConfiguration</a>

---


### DataCloudflareUserAgentBlockingRuleFilterOutputReference <a name="DataCloudflareUserAgentBlockingRuleFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRule } from '@cdktn/provider-cloudflare'

new dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetUserAgent">resetUserAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetUserAgent` <a name="resetUserAgent" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.resetUserAgent"></a>

```typescript
public resetUserAgent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgentInput">userAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.paused">paused</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgent">userAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userAgentInput`<sup>Optional</sup> <a name="userAgentInput" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgentInput"></a>

```typescript
public readonly userAgentInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userAgent`<sup>Required</sup> <a name="userAgent" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.userAgent"></a>

```typescript
public readonly userAgent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareUserAgentBlockingRuleFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareUserAgentBlockingRule.DataCloudflareUserAgentBlockingRuleFilter">DataCloudflareUserAgentBlockingRuleFilter</a>

---




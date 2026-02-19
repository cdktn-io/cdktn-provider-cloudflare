# `dataCloudflareEmailRoutingRule` Submodule <a name="`dataCloudflareEmailRoutingRule` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailRoutingRule <a name="DataCloudflareEmailRoutingRule" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/email_routing_rule cloudflare_email_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule(scope: Construct, id: string, config: DataCloudflareEmailRoutingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig">DataCloudflareEmailRoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig">DataCloudflareEmailRoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.resetRuleIdentifier">resetRuleIdentifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareEmailRoutingRuleFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter">DataCloudflareEmailRoutingRuleFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetRuleIdentifier` <a name="resetRuleIdentifier" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.resetRuleIdentifier"></a>

```typescript
public resetRuleIdentifier(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailRoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isConstruct"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareEmailRoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailRoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/email_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList">DataCloudflareEmailRoutingRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference">DataCloudflareEmailRoutingRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.matchers">matchers</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList">DataCloudflareEmailRoutingRuleMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter">DataCloudflareEmailRoutingRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.ruleIdentifierInput">ruleIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.ruleIdentifier">ruleIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.actions"></a>

```typescript
public readonly actions: DataCloudflareEmailRoutingRuleActionsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList">DataCloudflareEmailRoutingRuleActionsList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailRoutingRuleFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference">DataCloudflareEmailRoutingRuleFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchers`<sup>Required</sup> <a name="matchers" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.matchers"></a>

```typescript
public readonly matchers: DataCloudflareEmailRoutingRuleMatchersList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList">DataCloudflareEmailRoutingRuleMatchersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareEmailRoutingRuleFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter">DataCloudflareEmailRoutingRuleFilter</a>

---

##### `ruleIdentifierInput`<sup>Optional</sup> <a name="ruleIdentifierInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.ruleIdentifierInput"></a>

```typescript
public readonly ruleIdentifierInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `ruleIdentifier`<sup>Required</sup> <a name="ruleIdentifier" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.ruleIdentifier"></a>

```typescript
public readonly ruleIdentifier: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailRoutingRuleActions <a name="DataCloudflareEmailRoutingRuleActions" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActions.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailRoutingRuleActions: dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActions = { ... }
```


### DataCloudflareEmailRoutingRuleConfig <a name="DataCloudflareEmailRoutingRuleConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailRoutingRuleConfig: dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter">DataCloudflareEmailRoutingRuleFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/email_routing_rule#filter DataCloudflareEmailRoutingRule#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.ruleIdentifier">ruleIdentifier</a></code> | <code>string</code> | Routing rule identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/email_routing_rule#zone_id DataCloudflareEmailRoutingRule#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailRoutingRuleFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter">DataCloudflareEmailRoutingRuleFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/email_routing_rule#filter DataCloudflareEmailRoutingRule#filter}.

---

##### `ruleIdentifier`<sup>Optional</sup> <a name="ruleIdentifier" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleConfig.property.ruleIdentifier"></a>

```typescript
public readonly ruleIdentifier: string;
```

- *Type:* string

Routing rule identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/email_routing_rule#rule_identifier DataCloudflareEmailRoutingRule#rule_identifier}

---

### DataCloudflareEmailRoutingRuleFilter <a name="DataCloudflareEmailRoutingRuleFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailRoutingRuleFilter: dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter by enabled routing rules. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter by enabled routing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/email_routing_rule#enabled DataCloudflareEmailRoutingRule#enabled}

---

### DataCloudflareEmailRoutingRuleMatchers <a name="DataCloudflareEmailRoutingRuleMatchers" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchers.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailRoutingRuleMatchers: dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailRoutingRuleActionsList <a name="DataCloudflareEmailRoutingRuleActionsList" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.get"></a>

```typescript
public get(index: number): DataCloudflareEmailRoutingRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareEmailRoutingRuleActionsOutputReference <a name="DataCloudflareEmailRoutingRuleActionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActions">DataCloudflareEmailRoutingRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailRoutingRuleActions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleActions">DataCloudflareEmailRoutingRuleActions</a>

---


### DataCloudflareEmailRoutingRuleFilterOutputReference <a name="DataCloudflareEmailRoutingRuleFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter">DataCloudflareEmailRoutingRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareEmailRoutingRuleFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleFilter">DataCloudflareEmailRoutingRuleFilter</a>

---


### DataCloudflareEmailRoutingRuleMatchersList <a name="DataCloudflareEmailRoutingRuleMatchersList" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.get"></a>

```typescript
public get(index: number): DataCloudflareEmailRoutingRuleMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareEmailRoutingRuleMatchersOutputReference <a name="DataCloudflareEmailRoutingRuleMatchersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingRule } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchers">DataCloudflareEmailRoutingRuleMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailRoutingRuleMatchers;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailRoutingRule.DataCloudflareEmailRoutingRuleMatchers">DataCloudflareEmailRoutingRuleMatchers</a>

---




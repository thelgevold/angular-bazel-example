
import { Cmp8882Component } from './cmp';
describe('Cmp8882Component', () => {
  it('should add', () => {
    expect(new Cmp8882Component().add8882(1)).toBe(8883);
  });
});
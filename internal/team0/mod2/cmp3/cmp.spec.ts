
import { Cmp8023Component } from './cmp';
describe('Cmp8023Component', () => {
  it('should add', () => {
    expect(new Cmp8023Component().add8023(1)).toBe(8024);
  });
});
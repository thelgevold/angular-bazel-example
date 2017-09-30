
import { Cmp8957Component } from './cmp';
describe('Cmp8957Component', () => {
  it('should add', () => {
    expect(new Cmp8957Component().add8957(1)).toBe(8958);
  });
});
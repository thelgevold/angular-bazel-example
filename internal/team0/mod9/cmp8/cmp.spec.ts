
import { Cmp8098Component } from './cmp';
describe('Cmp8098Component', () => {
  it('should add', () => {
    expect(new Cmp8098Component().add8098(1)).toBe(8099);
  });
});

import { Cmp8631Component } from './cmp';
describe('Cmp8631Component', () => {
  it('should add', () => {
    expect(new Cmp8631Component().add8631(1)).toBe(8632);
  });
});
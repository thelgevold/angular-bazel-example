
import { Cmp8774Component } from './cmp';
describe('Cmp8774Component', () => {
  it('should add', () => {
    expect(new Cmp8774Component().add8774(1)).toBe(8775);
  });
});
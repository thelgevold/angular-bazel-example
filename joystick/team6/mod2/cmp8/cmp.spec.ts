
import { Cmp9628Component } from './cmp';
describe('Cmp9628Component', () => {
  it('should add', () => {
    expect(new Cmp9628Component().add9628(1)).toBe(9629);
  });
});

import { Cmp9310Component } from './cmp';
describe('Cmp9310Component', () => {
  it('should add', () => {
    expect(new Cmp9310Component().add9310(1)).toBe(9311);
  });
});
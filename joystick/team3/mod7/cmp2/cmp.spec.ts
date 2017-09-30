
import { Cmp9372Component } from './cmp';
describe('Cmp9372Component', () => {
  it('should add', () => {
    expect(new Cmp9372Component().add9372(1)).toBe(9373);
  });
});
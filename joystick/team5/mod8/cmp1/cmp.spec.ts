
import { Cmp9581Component } from './cmp';
describe('Cmp9581Component', () => {
  it('should add', () => {
    expect(new Cmp9581Component().add9581(1)).toBe(9582);
  });
});
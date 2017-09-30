
import { Cmp9582Component } from './cmp';
describe('Cmp9582Component', () => {
  it('should add', () => {
    expect(new Cmp9582Component().add9582(1)).toBe(9583);
  });
});
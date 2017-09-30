
import { Cmp7582Component } from './cmp';
describe('Cmp7582Component', () => {
  it('should add', () => {
    expect(new Cmp7582Component().add7582(1)).toBe(7583);
  });
});
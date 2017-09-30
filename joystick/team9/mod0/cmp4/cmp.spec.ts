
import { Cmp9904Component } from './cmp';
describe('Cmp9904Component', () => {
  it('should add', () => {
    expect(new Cmp9904Component().add9904(1)).toBe(9905);
  });
});
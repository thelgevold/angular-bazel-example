
import { Cmp7628Component } from './cmp';
describe('Cmp7628Component', () => {
  it('should add', () => {
    expect(new Cmp7628Component().add7628(1)).toBe(7629);
  });
});
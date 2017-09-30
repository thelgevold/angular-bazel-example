
import { Cmp7654Component } from './cmp';
describe('Cmp7654Component', () => {
  it('should add', () => {
    expect(new Cmp7654Component().add7654(1)).toBe(7655);
  });
});
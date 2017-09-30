
import { Cmp9940Component } from './cmp';
describe('Cmp9940Component', () => {
  it('should add', () => {
    expect(new Cmp9940Component().add9940(1)).toBe(9941);
  });
});
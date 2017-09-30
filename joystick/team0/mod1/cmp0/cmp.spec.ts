
import { Cmp9010Component } from './cmp';
describe('Cmp9010Component', () => {
  it('should add', () => {
    expect(new Cmp9010Component().add9010(1)).toBe(9011);
  });
});
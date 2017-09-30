
import { Cmp9340Component } from './cmp';
describe('Cmp9340Component', () => {
  it('should add', () => {
    expect(new Cmp9340Component().add9340(1)).toBe(9341);
  });
});
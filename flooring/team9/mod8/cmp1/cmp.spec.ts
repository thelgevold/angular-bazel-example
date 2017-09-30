
import { Cmp5981Component } from './cmp';
describe('Cmp5981Component', () => {
  it('should add', () => {
    expect(new Cmp5981Component().add5981(1)).toBe(5982);
  });
});
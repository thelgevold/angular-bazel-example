
import { Cmp9873Component } from './cmp';
describe('Cmp9873Component', () => {
  it('should add', () => {
    expect(new Cmp9873Component().add9873(1)).toBe(9874);
  });
});
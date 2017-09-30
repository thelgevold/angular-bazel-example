
import { Cmp9326Component } from './cmp';
describe('Cmp9326Component', () => {
  it('should add', () => {
    expect(new Cmp9326Component().add9326(1)).toBe(9327);
  });
});
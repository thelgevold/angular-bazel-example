
import { Cmp9709Component } from './cmp';
describe('Cmp9709Component', () => {
  it('should add', () => {
    expect(new Cmp9709Component().add9709(1)).toBe(9710);
  });
});
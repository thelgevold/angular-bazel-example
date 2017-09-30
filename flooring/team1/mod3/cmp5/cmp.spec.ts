
import { Cmp5135Component } from './cmp';
describe('Cmp5135Component', () => {
  it('should add', () => {
    expect(new Cmp5135Component().add5135(1)).toBe(5136);
  });
});
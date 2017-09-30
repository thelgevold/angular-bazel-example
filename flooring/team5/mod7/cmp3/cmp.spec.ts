
import { Cmp5573Component } from './cmp';
describe('Cmp5573Component', () => {
  it('should add', () => {
    expect(new Cmp5573Component().add5573(1)).toBe(5574);
  });
});

import { Cmp5806Component } from './cmp';
describe('Cmp5806Component', () => {
  it('should add', () => {
    expect(new Cmp5806Component().add5806(1)).toBe(5807);
  });
});
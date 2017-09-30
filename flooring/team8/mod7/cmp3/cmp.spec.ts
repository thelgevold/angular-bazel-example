
import { Cmp5873Component } from './cmp';
describe('Cmp5873Component', () => {
  it('should add', () => {
    expect(new Cmp5873Component().add5873(1)).toBe(5874);
  });
});
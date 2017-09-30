
import { Cmp3110Component } from './cmp';
describe('Cmp3110Component', () => {
  it('should add', () => {
    expect(new Cmp3110Component().add3110(1)).toBe(3111);
  });
});
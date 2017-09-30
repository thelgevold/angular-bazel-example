
import { Cmp4251Component } from './cmp';
describe('Cmp4251Component', () => {
  it('should add', () => {
    expect(new Cmp4251Component().add4251(1)).toBe(4252);
  });
});

import { Cmp7251Component } from './cmp';
describe('Cmp7251Component', () => {
  it('should add', () => {
    expect(new Cmp7251Component().add7251(1)).toBe(7252);
  });
});

import { Cmp6009Component } from './cmp';
describe('Cmp6009Component', () => {
  it('should add', () => {
    expect(new Cmp6009Component().add6009(1)).toBe(6010);
  });
});
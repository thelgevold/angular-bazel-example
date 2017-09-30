
import { Cmp6200Component } from './cmp';
describe('Cmp6200Component', () => {
  it('should add', () => {
    expect(new Cmp6200Component().add6200(1)).toBe(6201);
  });
});